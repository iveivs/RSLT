export const getRoles = () =>
    fetch('http://localhost:3000/comments').then((loadedRoles) => loadedRoles.json())