// import { getUser, addUser } from "./api"
// import { sessions } from './sessions'
import {fetchRoles, fetchUsers, register, logout, authorize } from "./operations"


export const server = {
    authorize,
    register,
    logout,
    fetchRoles,
    fetchUsers,
}