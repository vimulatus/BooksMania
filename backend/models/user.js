const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/booksmania_db');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'error in connecting!'))

// db.once('open', () => {
//     console.log("Connection successful...")
// })

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isDark: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;