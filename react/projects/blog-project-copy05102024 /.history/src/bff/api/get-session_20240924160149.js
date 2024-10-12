import { transformUser } from "../transformers"

export const getSession = async (hash) =>
    fetch(`http://localhost:3000/users?hash=${hash}`)
        .then((loadedUser) => loadedUser.json())
        .then(([loadedUser]) => loadedUser && transformUser(loadedUser))