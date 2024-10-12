export const transformRole = (dbRole) => ({
    id: dbRole.id,
    login: dbRole.login,
    password: dbUser.password,
    registeredAt: dbUser.registered_at,
    roleId: dbUser.role_id,
})