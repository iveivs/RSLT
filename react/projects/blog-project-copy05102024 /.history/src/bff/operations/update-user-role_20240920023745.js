import { setUserRole } from "../api"

export const updateUserRole = async ( userSession , userId, newUserRoleId) => {
    await setUserRole(userId, newUserRoleId)
}