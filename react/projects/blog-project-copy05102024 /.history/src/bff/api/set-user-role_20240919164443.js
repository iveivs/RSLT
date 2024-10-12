export const updateUser = (user) =>
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        headers: {
            // 'Content-Type': 'application/json.charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: user.login, // сокращённая запись, когда имя переменной и имя поля совпадают
            password: user.password, // сокращённая запись, когда имя переменной и имя поля совпадают
            registered_at: generateDate(),
            role_id: 2,
        })
    }).then((createdUser) => createdUser.json())
