async function renderPost (postId) {
    const postsData = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let data = await postsData.then(data => data.json())
    let posts = .then(posts => console.log(posts))

    console.log('postsData', postsData);
    const box = document.createElement('div')
    box.className = 'post'
}

renderPost(1)


