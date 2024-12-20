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
            validator: 
        }
    },
    content : {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema)

module.exports = Post