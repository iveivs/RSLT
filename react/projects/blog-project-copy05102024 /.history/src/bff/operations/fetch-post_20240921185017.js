import { sessions } from "../sessions"
import { getUsers } from "../api"
import { ROLE } from '../constants'

export const fetchPost = async (postId) => {
    

    const users = await getUsers()

    return {
        error: null,
        res: users,
    }
}