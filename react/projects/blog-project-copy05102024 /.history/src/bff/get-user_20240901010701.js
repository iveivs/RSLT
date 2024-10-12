import { getUsers } from "./get-users"
export const user = (loginToFind) =>  {
    const users = getUsers()
    users.find(({ login }) => login === loginToFind)
}