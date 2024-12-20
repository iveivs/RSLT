import { styled } from "styled-components";
import { H2, Icon } from "../../../../components";

const PostContentContainer = ({
    className,
    post: { id, title, imageUrl, content, publishedAt },
}) => {
    return (
        <div className={className}>
            <img src={imageUrl} alt={title} />
            <H2>{title}</H2>
            <div className="special-panel">
                <div>
                    < Icon
                </div>
                {publishedAt}</div>
            <div className="post-text">{content}</div>
        </div>
    );
};

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    юspecial-panel {
        margin: -20px 0 20px;
        font-size: 18px;
    }
`;
