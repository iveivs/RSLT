export const addComment = as (userId, postId, content) => {
    const existedUser = await getUser(regLogin)

    if (existedUser) {
        return {
            error: 'Такой пользователь уже занят',
            res: null
        }
    }

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