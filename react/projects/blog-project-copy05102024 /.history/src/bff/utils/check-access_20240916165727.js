import { sessions } from "../sessions"

export const checkAccess = (userSession, accessRoles) => {
    const user = sessions.list[userSession]

    return 
    if(!user) {
        return false
    }

    if(!accessRoles.includes(user.roleId) ) {
        return false
    }

    return true

}