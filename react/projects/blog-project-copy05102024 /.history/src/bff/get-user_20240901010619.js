import { getUsers } from "./get-users"
export const user = (loginToFind) =>  {
    users.find(({ login }) => login === loginToFind)
}