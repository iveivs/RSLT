import { addComment } from "../api"

export const addPostComment = async (userId, postId, content) => {
    await addComment(userId, postId, content)

    await

    const user = await addUser(regLogin, regPassword)

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