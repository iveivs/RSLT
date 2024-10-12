import { Comments, PostContent } from "./components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useServerRequest } from "../../hooks";
import { styled } from "styled-components"
import { H2 } from "../../components";

const PostContainer = ({className}) => {
    const post = useSelector(selector) //zaglushka
    const dispatch = useDispatch()
    const params = useParams()
    const requestServer = use

    useEffect(() => {
        dispatch(loadPost(params.id))
    }, [])
    return (
        <div className={className}>
            <H2>Статьи</H2>
            <PostComments  />
            <Comments  />
        </div>
    )
}

export const Post = styled(PostContainer)`

`