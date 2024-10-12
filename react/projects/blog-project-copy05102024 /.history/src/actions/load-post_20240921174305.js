export const loadPost = (requestServer, postId) => (dispatch) => {
    requestServer('fetchPost')
}