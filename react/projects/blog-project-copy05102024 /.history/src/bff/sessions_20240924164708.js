import { getSession, addSession, deleteSession, getUser} from './api'

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

    async access(hash, accessRoles) {
        const session = await getSession()
        const user = await getUser()
        // const user = this.list[hash]
        return !!user && accessRoles.includes(user.roleId)  
    }
}