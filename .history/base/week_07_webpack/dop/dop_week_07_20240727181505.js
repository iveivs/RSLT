const renderPost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(data => data.json())
    .then(posts => console.log(posts))

    console.log(object);
    const box = document.createElement('div')
    box.className = 'post'
}

renderPost(1)


