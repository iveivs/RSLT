export const addCommentAsync = (requestServer, userId, pos) => (dispatch) => {
    requestServer('fetchPost', postId).then((postData) => {
        dispatch(setPostData(postData.res))
    })
}