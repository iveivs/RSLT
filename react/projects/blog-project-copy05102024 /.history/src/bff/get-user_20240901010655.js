import { getUsers } from "./get-users"
export const user = (loginToFind) =>  {
    const users = as getUsers()
    users.find(({ login }) => login === loginToFind)
}