export const transformPost = (dbPost) => ({
    id: dbPost.id,
    title: dbPost.title,
    content: dbPost.content
})