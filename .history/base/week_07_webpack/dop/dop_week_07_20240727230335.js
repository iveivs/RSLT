// Вы вместе с командой разработки создаете социальную сеть, где можно делится постами и оставлять комментарии к посту. 
// Пока проект на ранней стадии, и поэтому вам нужно поработать только с отрисовкой нужных элементов.

// Вам необходимо создать функцию renderPost(), которая будет получать пост по id. 
// Функция будет принимать 1 параметр postId и с помощью данного URL: «https://jsonplaceholder.typicode.com/posts/1» 
// получать данные о посте (в URL выше id поста равен 1).

// После того, как вы получите данные о посте, требуется получить все комментарии для конкретного поста. 
// Чтобы, например, извлечь комментарии для поста с id равным 1, вам необходимо использовать 
// следующий url: «https://jsonplaceholder.typicode.com/comments?postId=1»

// Для отображения информации о посте и комментариях на странице — используйте данный шаблон:

{/* <div id="post" class="post">
    <h1 class="post__title">Название Поста</h1>
    <p class="post__text">Текст Поста</p>
    <b class="post__comments-text">Комментарии</b>
    <div class="post__comments">
        <div class="post-comment">
            <span class="post-comment__author">maxim@gmail.com</span>
            <span class="post-comment__text">
                laudantium enim quasi est quidem magnam voluptate ipsam eosntempora quo necessitatibusndolor quam autem quasinreiciendis et nam sapiente accusantium
            </span>
        </div>
    </div>
</div> */}

// Каждый класс отвечает за конкретную информацию:

// post__title - значение свойства title у поста
// post__text - значение свойства body у поста
// post-comment__authorзначение свойства email у комментария
// post-comment__text значение свойства body у комментария
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
function createComment() {
    const comment = document.createElement('div')
    comment.className = 'post'
    document.body.append(box)
}

function createPost(title, body) {
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

    const commentsText = document.createElement('b')
    commentsText.classList = 'post__comments-text'
    commentsText.textContent = `Комментарии`
    box.append(commentsText)
}

function createComment() {

}
createPost()


