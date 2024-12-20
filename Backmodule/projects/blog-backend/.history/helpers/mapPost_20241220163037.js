const { default: mongoose } = require("mongoose")

module.exports = function(post) {
    return {
        id: post.id ,
        title: post.title ,
        imageUrl: post.image ,
        content: post.content ,
        comments: post.comments.map(comment => mongoose) ,
        publishedAt: post.createdAt ,
    }
}
