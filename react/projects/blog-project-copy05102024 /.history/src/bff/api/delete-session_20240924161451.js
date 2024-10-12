export const deleteSession = (userId) =>
    fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
    })
