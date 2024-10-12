export const addCommentAsync = (requestServer, userId, postId, content) => (dispatch) => {
    requestServer('fetchPost', postId).then((postData) => {
        dispatch(setPostData(postData.res))
    })
}