import { getSession } from "./get-session"

export const deleteSession = async (hash) => {
    const 
}
    fetch(`http://localhost:3000/sessions/${hash}`, {
        method: 'DELETE',
    })
