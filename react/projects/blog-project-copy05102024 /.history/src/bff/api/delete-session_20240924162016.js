import { getSession } from "./get-session"

export const deleteSession = async (hash) => {
    const session = await getSession()
}
    fetch(`http://localhost:3000/sessions/${hash}`, {
        method: 'DELETE',
    })
