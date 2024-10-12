import { getUsers } from "./get-users"
export const user = as (loginToFind) =>  {
    const users = getUsers()
    users.find(({ login }) => login === loginToFind)
}