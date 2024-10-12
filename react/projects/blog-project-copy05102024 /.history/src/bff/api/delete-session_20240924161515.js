export const deleteSession = (hash) =>
    fetch(`http://localhost:3000/users/${hash}`, {
        method: 'DELETE',
    })
