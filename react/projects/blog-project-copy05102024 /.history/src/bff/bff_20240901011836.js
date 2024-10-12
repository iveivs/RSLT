import { getUser } from "./get-user"
// import { generateDate } from "./generate-date"
import { addUser } from "./add-user"


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

        const session = {
            Logout() {
                Object.keys(session).forEach((key) => {
                    delete session[key]
                })
            },
            removeComment() {
                console.log('удаление комментария');
            }
        }

        return {
            error: null,
            res: session
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

        await addUser()

        const session = {
            Logout() {
                Object.keys(session).forEach((key) => {
                    delete session[key]
                })
            },
            removeComment() {
                console.log('удаление комментария');
            }
        }

        return {
            error: null,
            res: session,
        }
    }
}