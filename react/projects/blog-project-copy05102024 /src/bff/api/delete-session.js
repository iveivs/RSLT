// import { getSession } from "./get-session"

export const deleteSession = async (sassionId) => {
    fetch(`http://localhost:3000/sessions/${sassionId}`, {
        method: 'DELETE',
    })
}
    
