import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrderSchema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    initialDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    quantity:{
        type:Number,
    }
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
