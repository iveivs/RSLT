import { transformUser } from "../transformers"

export const getUser = async (loginToFind) =>
    fetch(`http://localhost:3000/users?hash=${loginToFind}`)
        .then((loadedUser) => loadedUser.json())
        .then(([loadedUser]) => loadedUser && transformUser(loadedUser))