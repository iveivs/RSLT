import { fetchRoles, fetchUsers, register, logout, authorize, updateUserRole, removeUser } from "./operations"

export const server = {
    authorize,
    register,
    logout,
    fetchRoles,
    fetchUsers,
    updateUserRole,
    removeUser,
}