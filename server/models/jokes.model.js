const mongoose = require("mongoose")

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Please add a setup"],
        minLength: [10, "Setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Please add a punchline"],
        minLength: [3, "Punchline must be at least 3 characters"]
    }
}, {timestamps: true})

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;