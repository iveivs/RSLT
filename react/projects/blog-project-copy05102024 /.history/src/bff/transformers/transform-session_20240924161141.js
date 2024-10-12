export const transformSession = (dbSession) => ({
    id: dbSession.id,
    login: dbSession.login,
    userId: dbSession.user_id,
})