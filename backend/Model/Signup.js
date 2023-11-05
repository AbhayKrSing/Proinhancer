// Import mongoose
const mongoose = require('mongoose')

// Define a schema for the user documents
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    project: [{ idea: String, description: String, task: [String] }]


}, {
    timestamps: true
});

// Create a model for the user collection
const User = mongoose.model('User', userSchema);
module.exports = User;