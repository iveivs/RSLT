import { getSession, addSession, deleteSession} from './api'

export const sessions = {
    // list: {},
    create(user) {
        const hash = Math.random().toFixed(50);

        addSession(hash, user)
        // this.list[hash] = user  
        return hash
    },
    add(hash, user) {
        
    },
    remove(hash) {
        const session 
        deleteSession(hash)
        // delete this.list[hash]
    },

    async access(hash, accessRoles) {
        const session = await getSession(hash)
        // const user = await getUser(hash)
        // const user = this.list[hash]
        return !! session.user && accessRoles.includes(session.user.roleId)  
    }
}