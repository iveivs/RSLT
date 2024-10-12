import { setUserRole } from "../api"

export const updateUserRole = async ( userSes , userId, newUserRoleId) => {
    await setUserRole(userId, newUserRoleId)
}