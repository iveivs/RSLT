import { Comments, PostContent } from "./components";
import
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "styled-components"
import { H2 } from "../../components";

const PostContainer = ({className}) => {
    const post = useSelector(selector) //zaglushka
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPost(id))
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