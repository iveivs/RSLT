
import { fetchRoles, fetchUsers, register, logout, authorize } from "./operations"


export const server = {
    authorize,
    register,
    logout,
    fetchRoles,
    fetchUsers,
}