import { setUserRole } from "../api"

export const updateUserRole = as (userId, newUserRoleId) => {
    setUserRole(userId, newUserRoleId)
}