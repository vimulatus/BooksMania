const mongoose = require('mongoose');

const shelfSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId
    }
});

const Shelf = mongoose.model('Shelf', shelfSchema);
module.exports = Shelf;