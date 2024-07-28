// async function renderPost (postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     let postData = await response.json()
//     console.log(postData)

//     const box = document.createElement('div')
//     box.className = 'post'
//     document.body.append(box)

//     const postTitle = document.createElement('div')
//     postTitle.className = 'post__title'
//     postTitle.textContent = `${postData.title}`
//     box.append(postTitle)

//     const postsText = document.createElement('p')
//     postsText.classList = 'post__text'
//     postsText.textContent = `${postData.body}`
//     box.append(postsText)
// }

// renderPost(1)

function createPost (title, body) {
    const box = document.createElement('div')
    box.className = 'post'
    document.body.append(box)

    const postTitle = document.createElement('div')
    postTitle.className = 'post__title'
    postTitle.textContent = `${title}`
    box.append(postTitle)

    const postsText = document.createElement('p')
    postsText.classList = 'post__text'
    postsText.textContent = `${body}`
    box.append(postsText)
}

function createComment () => {
    
}


