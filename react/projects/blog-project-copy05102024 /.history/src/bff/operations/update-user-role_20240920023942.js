import { setUserRole } from "../api"
import ROL

export const updateUserRole = async ( userSession , userId, newUserRoleId) => {
    const accessRoles = [ROLE.ADMIN]

    if (!sessions.access(userSession, accessRoles)) {
        return {
            error: 'Доступ запрещён',
            res: null
        }
    }

    const users = await getUsers()

    await setUserRole(userId, newUserRoleId)
}