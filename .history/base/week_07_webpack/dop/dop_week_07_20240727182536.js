async function renderPost (postId) {
    const postsData = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let data = await postsData.then(data => data.json())
    

    console.log('postsData', postsData);
    const box = document.createElement('div')
    box.className = 'post'
}

renderPost(1)


