export const setUserRole = (login, roleId) =>
    fetch(`http://localhost:3000/users${login}`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json.charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login, // сокращённая запись, когда имя переменной и имя поля совпадают
            password,
            registered_at: generateDate(),
            role_id: 2,
        })
    }).then((createdUser) => createdUser.json())
