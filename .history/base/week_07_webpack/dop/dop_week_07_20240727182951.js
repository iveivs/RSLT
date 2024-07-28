async function renderPost (postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    let postData = await response.json()
    console.log(postData)

    const box = document.createElement('div')
    box.className = 'post'
    box.textContent = `${postData.title}`
    document.
}

renderPost(1)


