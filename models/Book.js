const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    authors: {
        type: [String]
    },
    saved: {
        type: Boolean,
        default: true
    }
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;