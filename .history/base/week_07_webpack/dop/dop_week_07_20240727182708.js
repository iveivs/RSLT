async function renderPost (postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let postsData = await response.json()
    

    console.log('postsData', postsData);
    const box = document.createElement('div')
    box.className = 'post'
}

renderPost(1)


