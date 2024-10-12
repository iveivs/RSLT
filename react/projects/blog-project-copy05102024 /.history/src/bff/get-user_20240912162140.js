export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3000/users?login=${loginToFind}`)
        .then((loadedUser) => loadedUser.json(),
        )



// const users = await getUsers()

//     return users.find(({ login }) => login === loginToFind)