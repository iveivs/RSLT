import { getSession } from "./get-session"

export const deleteSession = as (hash) => {

}
    fetch(`http://localhost:3000/sessions/${hash}`, {
        method: 'DELETE',
    })
