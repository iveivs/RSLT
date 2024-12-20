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
    return Post.deleteOne({ _id: id })
}
// get list with search and pagination


// get item
function getPost(id){
    return Post.findById(id)
}