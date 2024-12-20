const Comment = require('../controllers/comment')
const Post = require('../models/Post')

// add 
async function addComment(postId, comment) {
    const newComment = await Comment.create(comment)

    await Post.findByIdAndUpdate(postId, { $push: { comments: newComment }})

    return newComment
}
// delete
// get list for post