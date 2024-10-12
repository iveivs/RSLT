import { getUser } from "./get-user"
import { addUser } from "./add-user"
import { createSession } from "./create-session"
import { ROLE } from "../constants"


export const server = {
    async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin)

        if (!user) {
            return {
                error: 'Такой пользователь не найден',
                res: null
            }
        }

        if (authPassword !== user.password) {
            return {
                error: 'Неверный пароль',
                res: null
            }
        }

        return {
            error: null,
            res: {
                id: null,
                login: null,
                roleId: ROLE.

            },
            createSession(user.role_id)
        }
    },

    async register(regLogin, regPassword) {
        const user = await getUser(regLogin)

        if (user) {
            return {
                error: 'Такой пользователь уже занят',
                res: null
            }
        }

        await addUser(regLogin, regPassword)

        return {
            error: null,
            res: createSession(user.role_id),
        }
    }
}