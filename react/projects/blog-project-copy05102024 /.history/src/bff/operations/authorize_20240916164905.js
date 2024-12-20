import { sessions } from "../sessions"
import { getUser } from "../api"

export const authorize = async (authLogin, authPassword) => {
    const user = await getUser(authLogin)

    if (!user) {
        return {
            error: 'Такой пользователь не найден',
            res: null
        }
    }

    const {} = user

    if (authPassword !== user.password) {
        return {
            error: 'Неверный пароль',
            res: null
        }
    }

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