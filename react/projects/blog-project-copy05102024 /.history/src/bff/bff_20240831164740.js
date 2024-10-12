export const server = {
    async authorize(userLogin, password) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login)
    }

    
}