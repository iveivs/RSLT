import { styled } from "styled-components"
import { H2 } from "../../../../components"

const PostContentContainer = ({ className, id, title, imageUrl, content, publishedAt }) => {
    return (
        <div className={className}>
            <img src={imageUrl} alt={title} />
            <H2>{title}</H2>
            <div className="special-panel">{publishedAt}</div>
            <div></div>
        </div>
    )
}

export const PostContent = styled(PostContentContainer)`

`