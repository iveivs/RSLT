import { getUsers } from "./get-users"
export const user = async (loginToFind) =>  {
    const users = await getUsers()
    
    users.find(({ login }) => login === loginToFind)
}