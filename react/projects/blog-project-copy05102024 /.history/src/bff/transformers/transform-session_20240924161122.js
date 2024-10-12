export const transformSession = (dbSession) => ({
    id: dbSession.id,
    login: dbUser.login,
    password: dbUser.password,
})