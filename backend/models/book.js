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

// var b = new Book;

// b.id = "demo";
// b.volumeInfo.authors.push("Mittal");
// b.volumeInfo.categories.push("demo");
// b.volumeInfo.description = 'demo';
// b.volumeInfo.imageLinks.smallThumbnail = 'demo';
// b.volumeInfo.imageLinks.thumbnail = 'demo';
// b.volumeInfo.industryIdentifiers.push({
//     type: 'demo',
//     identifier: 'demo'
// });
// b.volumeInfo.language = 'demo';
// b.volumeInfo.pageCount = 10;
// b.volumeInfo.publishedDate = 'demo';
// b.volumeInfo.publisher = 'demo';
// b.volumeInfo.subtitle = 'demo';
// b.volumeInfo.title = 'demo';

// b.save();

// Data size of b - 502 bytes

module.exports = Book;