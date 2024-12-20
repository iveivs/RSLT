const Comment = require('../controllers/comment')

// add 
async function addComment(postId, comment) {
    const newComment = await Comment.create()
}
// delete
// get list for post