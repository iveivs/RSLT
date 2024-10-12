export const getRoles = () =>
    fetch('http://localhost:3000/').then((loadedRoles) => loadedRoles.json())