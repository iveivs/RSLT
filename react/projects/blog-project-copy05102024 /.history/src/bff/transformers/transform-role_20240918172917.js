export const transformRole = (dbRole) => ({
    id: dbUser.id,
    login: dbUser.login,
    password: dbUser.password,
    registeredAt: dbUser.registered_at,
    roleId: dbUser.role_id,
})