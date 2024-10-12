export const transformRole = (dbRole) => ({
    id: dbRole.id,
    login: dbUser.login,
    password: dbUser.password,
    registeredAt: dbUser.registered_at,
    roleId: dbUser.role_id,
})