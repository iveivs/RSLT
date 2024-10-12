export const addCommentAsync = (requestServer, userId, postId, ) => (dispatch) => {
    requestServer('fetchPost', postId).then((postData) => {
        dispatch(setPostData(postData.res))
    })
}