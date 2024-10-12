import { sessions } from "../sessions"
import { getUsers } from "../api"
import { ROLE } from '../constants'

export const fetchPost = async (postId) => {
    

    const post = await getPost(postId)

    return {
        error: null,
        res: post,
    }
}