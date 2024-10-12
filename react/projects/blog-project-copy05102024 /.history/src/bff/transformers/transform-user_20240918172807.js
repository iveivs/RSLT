export const transformUser = (dbUser) => ({
    id: dbUser.id,
    login: dbUser.login,
    password: dbUser.password,
    registeredAt: loadedUser.registered_at,
    roleId: loadedUser.role_id,
})