export const addCommentAsync = (requestServer, userId, postId, content) => (dispatch) => {
    requestServer('addComment', userId, postId, content).then(() => {
        dispatch(setPostData(postData.res))
    })
}