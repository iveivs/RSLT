export const setUserRole = (userId, roleId) =>
    fetch(`http://localhost:3000/users/${}`, {
        method: 'PATCH',
        headers: {
            // 'Content-Type': 'application/json.charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            role_id: roleId,
        })
    }).then((createdUser) => createdUser.json())
