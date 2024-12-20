import { transformUser } from "../transformers"

export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3000/users?login=${loginToFind}`)
        .then((loadedUser) => loadedUser.json())
        .then(
            ([loadedUser]) => loadedUser && transformUser(loadedUser)
            ({
            id: loadedUser.id,
            login: loadedUser.login,
            password: loadedUser.password,
            registeredAt: loadedUser.registered_at,
            roleId: loadedUser.role_id,
        }))






// export const getUser = async (loginToFind) =>
//     fetch(`http://localhost:3000/users?login=${loginToFind}`)
//         .then((loadedUser) => loadedUser.json())
//         .then(([loadedUser]) => loadedUser && ({
//             id: loadedUser.id,
//             login: loadedUser.login,
//             password: loadedUser.password,
//             registeredAt: loadedUser.registered_at,
//             roleId: loadedUser.role_id,
//         }))

