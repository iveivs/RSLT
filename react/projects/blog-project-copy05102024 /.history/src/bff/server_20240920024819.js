import { fetchRoles, fetchUsers, register, logout, authorize, upd } from "./operations"

export const server = {
    authorize,
    register,
    logout,
    fetchRoles,
    fetchUsers,
}