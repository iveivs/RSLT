const generateDate = () => new Date(Math.random() * 1000000000000 + 1999999999999)
.toISOString().substring(0, 16).replace('T', ' ')

export const server = {
    async authorize(authLogin, authPassword) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login === authLogin)

        if(!user) {
            return {
                error:'Такой пользователь не найден',
                res: null
            }
        }

        if(authPassword !== user.password) {
            return {
                error:'Неверный пароль',
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
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login === regLogin  )

        if(user) {
            return {
                error:'Такой пользователь уже занят',
                res: null
            }
        }

        await fetch(`http://localhost:3005/users`, {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json.charset=utf-8'
            },
            body: JSON.stringify({
                login: regLogin,
                password: regPassword,
                regestred_at:,
                role
            })
        })

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
    }
}