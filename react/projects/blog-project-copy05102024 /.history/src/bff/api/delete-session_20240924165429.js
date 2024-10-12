import { getSession } from "./get-session"

export const deleteSession = async (sassionId) => {
    const session = await getSession(hash)

    if(!session) {
        return
    }

    fetch(`http://localhost:3000/sessions/${session.id}`, {
        method: 'DELETE',
    })
}
    
