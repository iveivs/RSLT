export const transformPost = (dbPost) => ({
    id: dbPost.id,
    title: dbUser.login,
    password: dbUser.password,
    registeredAt: dbUser.registered_at,
    roleId: dbUser.role_id,
})