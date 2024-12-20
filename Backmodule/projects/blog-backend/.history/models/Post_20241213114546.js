const mongoose = require('mongoose')
const validator = require('validator')

const PostSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required: true,
        validate: {
            validator: validator.isURL,
            message: 'Image should be a valid url'
        }
    },
    content : {
        type: String,
        required: true,
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema)

module.exports = Post