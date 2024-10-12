export const addCommentAsync = (requestServer, userId, postId, content) => (dispatch) => {
    requestServer('addComment', postId).then((postData) => {
        dispatch(setPostData(postData.res))
    })
}