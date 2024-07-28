Вы вместе с командой разработки создаете социальную сеть, где можно делится постами и оставлять комментарии к посту. 
Пока проект на ранней стадии, и поэтому вам нужно поработать только с отрисовкой нужных элементов.

Вам необходимо создать функцию renderPost(), которая будет получать пост по id. 
Функция будет принимать 1 параметр postId и с помощью данного URL: «https://jsonplaceholder.typicode.com/posts/1» 
получать данные о посте (в URL выше id поста равен 1).

После того, как вы получите данные о посте, требуется получить все комментарии для конкретного поста. 
Чтобы, например, извлечь комментарии для поста с id равным 1, вам необходимо использовать следующий url: «https://jsonplaceholder.typicode.com/comments?postId=1»

Для отображения информации о посте и комментариях на странице — используйте данный шаблон:
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

function createComment () {

}


