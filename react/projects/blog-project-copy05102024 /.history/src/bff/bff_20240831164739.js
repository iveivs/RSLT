export const server = {
    async authorize(userlogin, password) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login)
    }

    
}