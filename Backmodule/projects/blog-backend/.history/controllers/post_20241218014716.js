const Post = require('../models/Post')
// add
function addPost(post) {
    return Post.create(post)
}
// edit
async function editPost(id, post) {
    const newPost = await Post.findByID(post)
}
// delete
// get list with search and pagination
// get item