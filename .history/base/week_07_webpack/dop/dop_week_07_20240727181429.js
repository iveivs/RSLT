const renderPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(data => data.json())
    .then(posts => console.log(posts))

    const box = document.createElement('div')
    box.className = ''
}

renderPost(1)


