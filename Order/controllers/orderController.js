import mongoose from 'mongoose';
import Order from '../models/Order.js';
import axios from 'axios';

export const createOrder = async (req, res) => {
    const { customerId, bookId, initialDate, deliveryDate } = req.body;

    try {
        
        const order = await Order.create({
            customerId,      
            bookId,          
            initialDate: new Date(initialDate),     
            deliveryDate: new Date(deliveryDate)   
        });

       
        res.json(order);
    } catch (err) {
       
        res.status(500).send(`Error creating order: ${err.message}`);
    }
};
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.sendStatus(404);
        }

     
        const customerIdObjectId = new mongoose.Types.ObjectId(order.customerId);
        const bookIdObjectId =new mongoose.Types.ObjectId(order.bookId);

        try {
            
            const customerResponse = await axios.get(`http://localhost:5555/customers/${customerIdObjectId}`);
            const customer = customerResponse.data;
            
            const bookResponse = await axios.get(`http://localhost:3000/books/${bookIdObjectId}`);
            const book = bookResponse.data;

            const orderObject = {
                customerName: customer.name,
                bookTitle: book.title,
                initialDate:order.initialDate,
                quantity:order.quantity,
                address:customer.address,
            };

            res.json(orderObject);
        } catch (err) {
            res.status(500).send(err.message);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};


export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (order) {
            res.send('Order removed successfully.');
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        res.status(500).send(err);
    }
};
