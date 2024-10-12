import { getUsers } from "./get-users"
export const user = (loginToFind) =>  {
    const users = async getUsers()
    users.find(({ login }) => login === loginToFind)
}