import { getUser, addUser } from "./api"
import { sessions } from './sessions'
import { register, logout, authorize } from "./operations"


export const server = {
    async logout(session) {
        sessions.remove(session)
    },

    async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin)

        if (!user) {
            return {
                error: 'Такой пользователь не найден',
                res: null
            }
        }

}