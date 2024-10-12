export const server = {
    async authorize(authLogin, userPassword) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login === authLogin)

        if(!user) {
            return {
                error:'Такой пользователь не найден',
                res: null
            }
        }

        if(userPassword !== user.password) {

        }
    }

    
}