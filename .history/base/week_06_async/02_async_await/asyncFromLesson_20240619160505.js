const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

fetch(USERS_URL)
    .then((response) => response.json())
    .then((users) => {
        console.log(users);
        const
    })
    .catch((error) => {
        console.log(error);
    })