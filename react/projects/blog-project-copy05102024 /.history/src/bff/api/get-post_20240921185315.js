import { transformPost } from "../transformers"

export const getPost = async (postId) =>
    fetch(`http://localhost:3000/users?${postId}`)
        .then((loadedUser) => loadedUser.json())
        .then(([loadedUser]) => loadedUser && transformPost(loadedUser))


