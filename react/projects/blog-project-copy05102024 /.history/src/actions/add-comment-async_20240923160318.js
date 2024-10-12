export const addCommentAsync = (requestServer, userId, postId, con) => (dispatch) => {
    requestServer('fetchPost', postId).then((postData) => {
        dispatch(setPostData(postData.res))
    })
}