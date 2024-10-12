import { setUserRole } from "../api"

export const updateUserRole = async (userId, newUserRoleId) => {
    qw setUserRole(userId, newUserRoleId)
}