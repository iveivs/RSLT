export const server = {
    as authorize(login, password) {
        fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())
    }
}