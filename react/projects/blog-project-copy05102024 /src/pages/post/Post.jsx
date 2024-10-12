import { Comments, PostContent, PostForm } from "./components";
import { useParams, useMatch } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useServerRequest } from "../../hooks";
import { styled } from "styled-components";
import { selectPost } from "../../selectors";
// import { initialPostState } from "../../reducers";
import { loadPostAsync, RESET_POST_DATA } from "../../actions";


const PostContainer = ({ className }) => {
    const dispatch = useDispatch();
    const params = useParams();
    const isCreating = useMatch("/post");
    const isEditing = useMatch("/post/:id/edit");
    const requestServer = useServerRequest();
    const post = useSelector(selectPost); //zaglushka

    useLayoutEffect(() => {
        dispatch(RESET_POST_DATA)
    }, [dispatch, isCreating])

    useEffect(() => {
        if (isCreating) {
            return
        }
        dispatch(loadPostAsync(requestServer, params.id));
    }, [dispatch, requestServer, params.id, isCreating]);

    return (
        <div className={className}>
            {isCreating || isEditing ? (
                <PostForm post={post} />
            ) : (
                <>
                    {/* <PostContent post={isCreating ? initialPostState : post} /> */}
                    <PostContent post={post} />
                    <Comments comments={post.comments} postId={post.id} />
                </>
            )}
        </div>
    );
};

export const Post = styled(PostContainer)`
    margin: 40px 0;
    padding: 0px 80px;
`;
