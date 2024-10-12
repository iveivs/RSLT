import { getSession } from "./get-session"

export const deleteSession = async (sassionI) => {
    const session = await getSession(hash)

    if(!session) {
        return
    }

    fetch(`http://localhost:3000/sessions/${session.id}`, {
        method: 'DELETE',
    })
}
    
