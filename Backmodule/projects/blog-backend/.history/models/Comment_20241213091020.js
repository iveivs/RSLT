const mongoose = require('mongoose')
const validator = require('validator')

const CommentSchema = mongoose.Schema({
    content : {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment