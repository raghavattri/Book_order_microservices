import mongoose from 'mongoose';

const { Schema } = mongoose;

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;
