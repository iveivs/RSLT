const Post = require('../models/Post')
// add
function addPost(post) {
    return Post.create(post)
}
// edit

// delete
// get list with search and pagination
// get item