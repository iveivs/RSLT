import { sessions } from "../sessions"
import { getRoles } from "../api"
import { ROLE } from '../constants'

export const fetchRoles = async (userSession) => {
    const accessRoles = [ROLE.ADMIN]
    

    const roles = await getRoles()

    return {
        error: null,
        res: roles,
    }
}