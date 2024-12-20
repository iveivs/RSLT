module.exports = function(comment){
    return {
        content: comment.content,
        author: comment.author.login
    }
}