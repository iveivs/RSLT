async function renderPost (postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let postData = await response.json()
    console.log(postData)

    console.log('postsData', postData);
    const box = document.createElement('div')
    box.className = 'post'
}

renderPost(1)


