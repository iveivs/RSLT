const Comment = require('../controllers/comment')
const Post = require('../models/Post')

// add 
async function addComment(postId, comment) {
    const newComment = await Comment.create(comment)

    await Post.findByIdAndUpdate(postId, { $push: { comments: newComment }})

    await newComment.populate('author')

    return newComment
}

// delete
async function name(params) {
    
}
// get list for post

module.exports = {
    addComment
}