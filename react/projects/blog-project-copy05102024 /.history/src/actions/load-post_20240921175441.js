export const loadPostA = (requestServer, postId) => (dispatch) => {
    requestServer('fetchPost', postId).then((postData) => {
        dispatch(setPostData())
    })
}