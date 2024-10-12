export const getComments = () =>
    fetch(@http://localhost:3000/comments?post_id=${}`).then((loadedRoles) => loadedRoles.json())