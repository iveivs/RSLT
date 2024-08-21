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

// более короткая запись
export const changeUser = () => (dispatch) =>
    fetchUserDataMock().then((userDataFromServer) =>
        dispatch({
            type: 'CHANGE_USER',
            payload: userDataFromServer,
        }))
// более длинная запись
// export const changeUser = () => {
//     return (dispatch) => {
//         fetchUserDataMock.then((userDataFromServer) => {
//             dispatch({
//                 type: 'CHANGE_USER',
//                 payload: userDataFromServer,
//             })
//         })
//     }
// }