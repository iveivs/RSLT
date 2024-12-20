const mongoose = require('mongoose')
const roles = require('../constants/roles')

const PostSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required: true,
    },
    content : {
        type: Number,
        default: roles.USER,
    },
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema)

module.exports = Post