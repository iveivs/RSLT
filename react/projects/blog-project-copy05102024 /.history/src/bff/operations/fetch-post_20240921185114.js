import { getPost } from "../api"
import { sessions } from "../sessions"
import { ROLE } from '../constants'

export const fetchPost = async (postId) => {
    

    const post = await getPost(postId)

    return {
        error: null,
        res: post,
    }
}