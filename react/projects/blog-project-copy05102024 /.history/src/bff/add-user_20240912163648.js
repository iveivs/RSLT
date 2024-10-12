import { generateDate } from "./generate-date"
export const addUser = (login, password) =>
    fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json.charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login, // сокращённая запись, когда имя переменной и имя поля совпадают
            password,
            regestred_at: generateDate(),
            role_id: 2,
        })
    }).then((created))
