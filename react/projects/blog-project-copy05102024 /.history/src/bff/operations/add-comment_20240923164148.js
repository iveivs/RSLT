import { addComment, getComments, getPost } from "../api"
import { ROLE } from "../constants"
import { sessions } from "../sessions"

export const addPostComment = async (userId, postId, content) => {
    const accessRoles = [ROLE.ADMIN]

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещён',
            res: null
        }
    }

    await addComment(userId, postId, content)

    const post = await getPost(postId)

    const comments = await getComments(postId)

    return {
        error: null,
        res: {
            ...post,
            comments,
        }
    }
}