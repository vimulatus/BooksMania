const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {
        type: String, 
        required: true,
        unique: true,
    },
    volumeInfo: {
        authors: [{
            type: String,
            required: true,
        }],
        categories: [String],
        description: String,
        imageLinks: {
            smallThumbnail: String,
            thumbnail: String,
        },
        industryIdentifiers: [{
            type: { type: String },
            identifier: String,
        }],
        language: String,
        pageCount: Number,
        publishedDate: String,
        publisher: String,
        subtitle: String,
        title: {
            type: String,
            required: true
        }
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;