const renderPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}
.then(data => data.json)
