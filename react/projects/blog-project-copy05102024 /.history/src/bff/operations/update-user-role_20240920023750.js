import { setUserRole } from "../api"

export const updateUserRole = async ( userSession , userId, newUserRoleId) => {
    userSession
    await setUserRole(userId, newUserRoleId)
}