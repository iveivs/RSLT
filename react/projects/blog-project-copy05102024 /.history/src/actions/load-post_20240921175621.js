import { setPostDa} 

export const loadPostAsync = (requestServer, postId) => (dispatch) => {
    requestServer('fetchPost', postId).then((postData) => {
        dispatch(postData())
    })
}