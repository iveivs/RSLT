export const addSession = (hash, userId) => {
    fetch(`http://localhost:3000/sessions`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json.charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            author_id: userId, 
            post_id: postId,
            published_at: generateDate(),
            content,
        })
    })
}