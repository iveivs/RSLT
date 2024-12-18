import { addComment, getPost } from "../api"

export const addPostComment = async (userId, postId, content) => {
    await addComment(userId, postId, content)

    const post = await getPost(postId)

    return {
        error: null,
        res: {
            id: user.id,
            login: user.login,
            roleId: user.role_id,
            session: sessions.create(user),
        },
    }
}