import { addComment, getComments, getPost } from "../api"
import { ROLE } from "../constants"

export const addPostComment = async (userId, postId, content) => {
    const accessRoles = [ROLE]

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