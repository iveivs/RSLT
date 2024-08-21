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
    return (dispatch) => {
        fetchUserDataMock.then((userData) => {
            
        })
    }

    let userDataFromServer 

    
    return {
        type: 'CHANGE_USER',
        payload: userDataFromServer,
    }
}