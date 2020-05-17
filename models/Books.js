const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    image: String,
    link: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;