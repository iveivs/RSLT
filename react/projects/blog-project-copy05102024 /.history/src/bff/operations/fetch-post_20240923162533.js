import { getPost } from "../api"

export const fetchPost = async (postId) => {
    const post = await getPost(postId)

    const 

    return {
        error: null,
        res: post,
    }
}