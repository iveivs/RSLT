import { getPost } from "../api"

export const fetchPost = async (postId) => {
    const post = await getPost(postId)

    const comments = await getComm

    return {
        error: null,
        res: post,
    }
}