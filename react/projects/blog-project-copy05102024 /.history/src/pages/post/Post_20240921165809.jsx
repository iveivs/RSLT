import { useEffect } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components"
import { H2 } from "../../components";

const PostContainer = (className) => {
    const post = useSelector(selector) //zaglushka
    useEffect(() => {

    }, [])
    return (
        <div className={className}>
            <H2>Статьи</H2>
            <PostComments  />
            C
        </div>
    )
}

export const Post = styled(PostContainer)`

`