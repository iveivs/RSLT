export const server = {
    async authorize(login, password) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())
    }

    const user = users
}