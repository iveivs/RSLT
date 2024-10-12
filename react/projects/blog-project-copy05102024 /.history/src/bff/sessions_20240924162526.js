import { getSession, addSession, deleteSession} from './api'

export const sessions = {
    // list: {},
    create(user) {
        const hash = Math.random().toFixed(50);

        addSession(hash, user.id)
        // this.list[hash] = user  
        return hash
    },
    add(hash, user) {
        
    },
    remove(hash) {
        delete this.list[hash]
    },

    access(hash, accessRoles) {
        const session = getSession()
        const user = this.list[hash]
        return !!user && accessRoles.includes(user.roleId)  
    }
}