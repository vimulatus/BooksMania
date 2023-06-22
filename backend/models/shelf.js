const mongoose = require('mongoose');
const User = require('./user');

const shelfSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
}, {
    timestamps: true
});

const Shelf = mongoose.model('Shelf', shelfSchema);
module.exports = Shelf;