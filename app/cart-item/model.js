const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const cartItemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name must be filled'],
        minlength: [5, 'Panjang nama makanan minimal 5 karakter']
    },

    qty: {
        type: Number,
        required: [true, 'Qty harus diisi'],
        min: [1, 'minimal qty adalah 1']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('CartItem', cartItemSchema);