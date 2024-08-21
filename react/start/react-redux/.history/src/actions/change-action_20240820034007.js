const fetchUserDataMock = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        })
    })
}

export const changeUser = () => {
    const userDataFromServer = 

    fetchUserDataMock.then(() => {})
    return {
        type: 'CHANGE_USER',
        payload: userDataFromServer,
    }
}