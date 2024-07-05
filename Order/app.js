import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/microservice', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('This is the orders endpoint');
});

app.use('/orders', orderRoutes);

app.listen(7777, () => {
    console.log('Listening on port: 7777');
});
