export const getComments = () =>
    fetch('http://localhost:3000/comments?post').then((loadedRoles) => loadedRoles.json())