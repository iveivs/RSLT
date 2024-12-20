const Comment = require('../controllers/comment')

// add 
async function addComment(postId, comment) {
    const newComment = await Comment.create(comment)

    await Pos

    return newComment
}
// delete
// get list for post