export const transformRole = (dbRole) => ({
    id: dbRole.id,
    login: dbRole.login,
})