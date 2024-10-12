export const transformSession = (dbSession) => ({
    id: dbSession.id,
    hash: dbSession.hash,
    user: {
        ...d
    }
})