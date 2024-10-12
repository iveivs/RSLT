import gene
export const addUser = () => fetch(`http://localhost:3005/users`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json.charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: regLogin,
            password: regPassword,
            regestred_at: generateDate(),
            role_id: 2,
        })
    })
