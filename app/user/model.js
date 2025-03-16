const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt');

let userSchema = Schema({

    full_name: {
        type: String,
        required: [true, 'Nama harus diisi'],
        maxlength: [255, 'Panjang nama harus minimal 3 - 255 karakter'],
        minlength: [3, 'Panjang nama harus  minimal 3 - 255 karakter']
    },

    customer_id: {
        type: Number
    },

    email: {
        type: String,
        required: [true, 'Email harus diisi'],
        maxlength: [255, 'panjang email maksial 255 karakter']
    },

    password: {
        type: String,
        required: [true, 'Password harus diisi'],
        maxlength: [255, 'Panjang password maximal 255 karakter']
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    token: [String]

}, { timestamps: true });

userSchema.path('email').validate(function (value) {
    const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_RE.test(value);
}, attr => `${attr.value} harus merupakan email yang valid!`);

userSchema.path('email').validate(async function (value) {

    try {
        //(1) Lakukan pencarian ke _collection_ User berdasarkan 'email'
        const count = await this.model('User').count({ email: value });

        //(2) kode ini mengindikasikan bahwajika user ditemukan akan mengembalikan 'false' jika tidak ditemukan mengembalikan true
        //jika 'false' maka validasi gagal
        //jika 'true' maka validasi berhasil
        return !count;
    } catch (err) {
        throw err
    }

}, attr => `$(attr.value) sudah terdaftar`);

const HASH_ROUND = 10;
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, HASH_ROUND);
    next()
});

// userSchema.plugin(AutoIncrement, { id: 'customer_id', inc_field: 'customer_id', reference_fields: 'role' });

module.exports = model('User', userSchema);