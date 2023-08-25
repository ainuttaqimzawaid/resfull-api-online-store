const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const tagSchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Panjang nama makanan minimal 3 karakter'],
        maxlength: [20, 'Panjang deskripsi maksimal 20 karakter'],
        required: [true, 'Nama makanan harus diisi']
    },
});

module.exports = model('Tag', tagSchema);