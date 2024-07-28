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
function createComment(userEmail, userCommentText) {
    const comment = document.createElement('div')
    comment.className = 'post__comment'

    const commentAuthor = document.createElement("span");
    commentAuthor.className = "post-comment__author";
    commentAuthor.textContent = `${userEmail}`;

    const commentText = document.createElement("span");
    commentText.className = "post-comment__text";
    commentText.textContent = userCommentText;

    comment.append(commentAuthor, commentText);
    return comment
}

function createPost(postName, text, comments) {
    const box = document.createElement('div')
    box.className = 'post'
    document.body.append(box)

    const postTitle = document.createElement('div')
    postTitle.className = 'post__title'
    postTitle.textContent = `${postName}`

    const postsText = document.createElement('p')
    postsText.classList = 'post__text'
    postsText.textContent = `${text}`

    const commentsText = document.createElement('b')
    commentsText.classList = 'post__comments-text'
    commentsText.textContent = `Комментарии`

    const commentsBlock = document.createElement("div");
    commentsBlock.className = "post__comments";
    box.append(postTitle, postsText, commentsText, commentsBlock)

    comments.forEach((comment) => {
        const commentHTML = createComment(comment.email, comment.body)
        commentsBlock.append(commentHTML)
    })

    return box
}

async function renderPost(postId) {
    try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await postResponse.json();

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        const comments = await commentsResponse.json();

        const postToHTML = createPost(post.title, post.body, comments);
        document.body.append(postHTML);
    } catch (error) {
        console.error(error);
    }
}

// function renderPost(postId) {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         .then((response) => response.json())
//         .then((post) => {
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                 .then((response) => response.json())
//                 .then((comments) => {
//                     const postHTML = createPost(post.title, post.body, comments);
//                     document.body.append(postHTML);
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                 });
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }
renderPost(1)

