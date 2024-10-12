export const addCommentAsync = () => (dispatch) => {
    requestServer('fetchPost', postId).then((postData) => {
        dispatch(setPostData(postData.res))
    })
}