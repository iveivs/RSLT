import { getUser } from "./get-user"
import { addUser } from "./add-user"
import { createSession } from "./create-session"
import { sessions } from './sessions'
import { ROLE } from "../constants"


export const server = {
    async 
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
        
        // const session = sessions.create(user)
        // sessions.add(session)

        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },
            
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
            res: {
                id: user.id,
                login: user.login,
                roleId: user.role_id,
                session: sessions.create(user),
            },
        }
    }
}