export const setUserRole = (user) =>
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            // 'Content-Type': 'application/json.charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: user.login, 
            password: user.password, 
            registered_at: generateDate(),
            role_id: 2,
        })
    }).then((createdUser) => createdUser.json())
