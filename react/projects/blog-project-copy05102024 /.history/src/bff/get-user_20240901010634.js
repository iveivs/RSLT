import { getUsers } from "./get-users"
export const user = (loginToFind) =>  {
    const users = 
    users.find(({ login }) => login === loginToFind)
}