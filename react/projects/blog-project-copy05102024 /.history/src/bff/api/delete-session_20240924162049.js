import { getSession } from "./get-session"

export const deleteSession = async (hash) => {
    const session = await getSession(hash)

    if() {}
}
    fetch(`http://localhost:3000/sessions/${hash}`, {
        method: 'DELETE',
    })
