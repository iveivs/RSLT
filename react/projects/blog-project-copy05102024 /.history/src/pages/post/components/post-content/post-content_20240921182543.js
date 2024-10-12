import { styled } from "styled-components"

const PostContentContainer = ({ className, id, title, imageUrl, content, publishedAt }) => {
    return (
        <div className={className}>
            <img src={imageUrl} alt={} />
        </div>
    )
}

export const PostContent = styled(PostContentContainer)`

`