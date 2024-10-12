export const transformSession = (dbSession) => ({
    id: dbSession.id,
    hash: dbSession.login,
    userId: dbSession.user_id,
})