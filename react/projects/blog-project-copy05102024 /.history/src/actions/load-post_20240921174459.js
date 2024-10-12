export const loadPost = (requestServer, postId) => (dispatch) => {
    requestServer('fetchPost', postId).then((post) => {
        dispatch(setPostData())
    })
}