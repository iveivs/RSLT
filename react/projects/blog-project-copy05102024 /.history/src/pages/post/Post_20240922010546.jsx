import { Comments, PostContent } from "./components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useServerRequest } from "../../hooks";
import { styled } from "styled-components"
import { H2 } from "../../components";
import { selectPost } from "../../selectors";
import { loadPostAsync } from "../../actions";

const PostContainer = ({className}) => {
    const dispatch = useDispatch()
    const params = useParams()
    const requestServer = useServerRequest()
    const post = useSelector(selectPost) //zaglushka

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id))
    }, [dispatch, requestServer, params.id])
    return (
        <div className={className}>
            <H2>Статьи</H2>
            <PostContent post={post} />
            <Comments comments={post.comments} />
        </div>
    )
}

padding: 40px 80px;
export const Post = styled(PostContainer)`
`