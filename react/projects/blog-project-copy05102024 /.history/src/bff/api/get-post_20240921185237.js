import { transformPost } from "../transformers"

export const getPost = async (loginToFind) =>
    fetch(`http://localhost:3000/users?login=${loginToFind}`)
        .then((loadedUser) => loadedUser.json())
        .then(([loadedUser]) => loadedUser && transformUser(loadedUser))


