export const transformSession = (dbSession) => ({
    id: dbSession.id,
    login: dbSession.login,
    password: dbSession.password,
})