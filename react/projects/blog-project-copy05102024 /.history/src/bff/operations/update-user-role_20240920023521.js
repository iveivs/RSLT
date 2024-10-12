import { setUserRole } from "../api"

export const updateUserRole = async (userId, newUserRoleId) => {
     setUserRole(userId, newUserRoleId)
}