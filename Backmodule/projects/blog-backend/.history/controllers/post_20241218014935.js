const Post = require('../models/Post')
// add
function addPost(post) {
    return Post.create(post)
}
// edit
async function editPost(id, post) {
    const newPost = await Post.findByIdAndUpdate(id, post, {returnDocument: 'after'})

    return newPost
}
// delete

function deletePost(id) {
    return Post.deleteOne
}
// get list with search and pagination
// get item