import { getSession } from "./get-session"

export const deleteSession = async (hash) => {
    const session
}
    fetch(`http://localhost:3000/sessions/${hash}`, {
        method: 'DELETE',
    })
