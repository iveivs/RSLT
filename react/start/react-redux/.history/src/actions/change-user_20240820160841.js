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
    return () => {
        
    }

    let userDataFromServer 

    fetchUserDataMock.then((userData) => {
        userDataFromServer = userData
    })
    return {
        type: 'CHANGE_USER',
        payload: userDataFromServer,
    }
}