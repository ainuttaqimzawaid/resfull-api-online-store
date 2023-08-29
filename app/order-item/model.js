const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const orderItemSchema = Schema({
    name: {
        type: String,
        minlength: [5, 'Panjang nama makanan minimal 5 karakter'],
        required: [true, 'Name must be filled']
    },

    price: {
        type: Number,
        required: [true, 'Price must be filled']
    },

    qty: {
        type: Number,
        required: [true, 'Quantity must be filled'],
        min: [1, 'Quantity minimal 1']
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },

    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = model('OrderItem', orderItemSchema);