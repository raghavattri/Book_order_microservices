import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import customerRoutes from './routes/customerRoutes.js';

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
    res.send('This is the customers endpoint');
});

app.use('/customers', customerRoutes);

app.listen(5555, () => {
    console.log('Listening on port: 5555');
});
