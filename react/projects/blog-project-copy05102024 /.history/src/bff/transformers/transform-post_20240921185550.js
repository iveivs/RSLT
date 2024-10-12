export const transformPost = (dbPost) => ({
    id: dbPost.id,
    title: dbPost.login,
    password: dbUser.password,
    registeredAt: dbUser.registered_at,
    roleId: dbUser.role_id,
})