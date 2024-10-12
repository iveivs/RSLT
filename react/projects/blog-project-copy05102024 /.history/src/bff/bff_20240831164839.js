export const server = {
    async authorize(userLogin, userPassword) {
        const users =  fetch('http://localhost:3005/users').then((loadedUsers)=> loadedUsers.json())

        const user = users.find(({login})=> login === userLogin)

        if(!user) {
            return {
                
            }
        }
    }

    
}