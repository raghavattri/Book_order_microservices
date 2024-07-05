import mongoose from 'mongoose';

const { Schema } = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    numberOfPages: {
        type: Number,
        required: false
    },
    publisher: {
        type: String,
        required: false
    }
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
