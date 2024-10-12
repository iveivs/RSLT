export const transformUser = (dbUser) => ({
    id: dbUser.id,
    login: dbUser.login,
    password: loadedUser.password,
    registeredAt: loadedUser.registered_at,
    roleId: loadedUser.role_id,
})