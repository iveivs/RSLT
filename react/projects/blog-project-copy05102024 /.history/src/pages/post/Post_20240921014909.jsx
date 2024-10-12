import { styled } from "styled-components"
import { H2 } from "../../components";

const PostContainer = (className) => {
    
    return (
        <div className={className}>
            <H2>Статьи</H2>
        </div>
    )
}

export const Post = styled(PostContainer)`

`