export const getComments = () =>
    fetch('http://localhost:3000/comments').then((loadedRoles) => loadedRoles.json())