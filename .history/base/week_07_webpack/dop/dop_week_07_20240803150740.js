function createComment(userEmail, userCommentText) {
    const comment = document.createElement('div')
    comment.className = 'post__comment'

    const commentAuthor = document.createElement("span");
    commentAuthor.className = "post-comment__author";
    commentAuthor.textContent = `${userEmail}`;

    const br = document.createElement("br")

    const commentText = document.createElement("span");
    commentText.className = "post-comment__text";
    commentText.textContent = `${userCommentText.charAt(0).toUpperCase()
        + userCommentText.slice(1)}`;

    comment.append(commentAuthor, br, commentText);
    return comment
}

function createPost(postName, text, comments) {
    const box = document.createElement('div')
    box.className = 'post'
    document.body.append(box)

    const postTitle = document.createElement('div')
    postTitle.className = 'post__title'
    postTitle.textContent = `${postName.charAt(0).toUpperCase()
        + postName.slice(1)}`

    const postsText = document.createElement('p')
    postsText.classList = 'post__text'
    postsText.textContent = `${text.charAt(0).toUpperCase()
        + text.slice(1)}`

    const commentsText = document.createElement('b')
    commentsText.classList = 'post__comments-text'
    commentsText.textContent = `Комментарии:`

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
        document.body.append(postToHTML);
    } catch (error) {
        console.error(error);
    }
}

renderPost(1)

