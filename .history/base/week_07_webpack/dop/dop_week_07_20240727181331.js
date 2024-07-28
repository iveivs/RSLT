const renderPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(data => data.json())
    .then(posts => console.log(posts))

    document.createElement()
}

renderPost(1)


