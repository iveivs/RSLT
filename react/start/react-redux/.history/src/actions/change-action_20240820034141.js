const fetchUserDataMock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Petr',
                age: 40,
            })
        }, 1500)
    })
}

export const changeUser = () => {
    const userDataFromServer = 

    fetchUserDataMock.then((userData) => {})
    return {
        type: 'CHANGE_USER',
        payload: userDataFromServer,
    }
}