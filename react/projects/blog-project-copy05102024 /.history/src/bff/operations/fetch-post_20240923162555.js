import { getPost } from "../api"

export const fetchPost = async (postId) => {
    const post = await getPost(postId)

    const comments = 

    return {
        error: null,
        res: post,
    }
}