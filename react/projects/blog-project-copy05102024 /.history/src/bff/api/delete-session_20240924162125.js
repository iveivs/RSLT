import { getSession } from "./get-session"

export const deleteSession = async (hash) => {
    const session = await getSession(hash)

    if(!session) {
        return
    }

    fetch(`http://localhost:3000/sessions/${session.}`, {
        method: 'DELETE',
    })
}
    
