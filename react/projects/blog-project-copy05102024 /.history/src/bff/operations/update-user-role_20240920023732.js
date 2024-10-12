import { setUserRole } from "../api"

export const updateUserRole = async ( userSe , userId, newUserRoleId) => {
    await setUserRole(userId, newUserRoleId)
}