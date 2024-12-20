const Post = require('../models/Post')
// add
function addPost(post) {
    return Post.create(post)
}
// edit
async function editPost(id, post) {
    return Post.create(post)
}
// delete
// get list with search and pagination
// get item