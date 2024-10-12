export const server = {
    async authorize(login, password) {
        fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())
    }
}