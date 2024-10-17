import { transformSession } from "../transformers"

export const getSession = async (hash) =>
    fetch(`http://localhost:3000/sessions?hash=${hash}`)
        .then((loadedSession) => loadedSession.json())
        .then(([loadedSession]) => console.log('loadedSession', loadedSession) && loadedSession && transformSession(loadedSession))