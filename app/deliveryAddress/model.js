const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const deliveryAddressSchema = Schema({
    nama: {
        type: String,
        required: [true, 'Nama alamat harus diisi'],
        maxlength: [255, 'Panjang maksimal nama alamat adalah 255 karakter']
    },

    kelurahan: {
        type: String,
        required: [255, 'Kelurahan harus diisi'],
        maxlength: [255, 'Panjang maksinmal nama kelurahan adalah 255 karakter']
    },

    kecamatan: {
        type: String,
        required: [true, 'Nama kecamatan harus diisi'],
        maxLength: [255, 'Panjang maksimal nama kecamatan adalah 255 karakter']
    },

    kabupaten: {
        type: String,
        required: [true, 'Nama kabupaten harus diisi'],
        maxLength: [255, 'Panjang maksimal nama kabupaten adalah 255 karakter']
    },

    provinsi: {
        type: String,
        required: [true, 'Nama provinsi harus diisi'],
        maxLength: [255, 'Panjang maksimal nama provinsi adalah 255 karakter']
    },

    detail: {
        type: String,
        required: [true, 'Detail alamat harus diisi'],
        maxLength: [1000, 'Panjang maksimal detail alamat adalah 1000 karakter']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = model('DeliveryAddress', deliveryAddressSchema)