import { fetchRoles, fetchUsers, register, logout, authorize, updateUserRole } from "./operations"

export const server = {
    authorize,
    register,
    logout,
    fetchRoles,
    fetchUsers,
    updateUserRole,
    removeUser,
}