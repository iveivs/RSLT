const renderPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(data => data.json())
    .then(posts => console.log(posts))

    const  = document.createElement('div')
}

renderPost(1)


