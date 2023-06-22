const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/booksmania_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting!'))

db.once('open', () => {
    console.log("Connection successful...")
})