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
                <div className="published-at">
                    <Icon
                        id="fa-calendar-o"
                        margin="0 8px 0 0"
                        onClick={() => {}}
                    />
                    {publishedAt}
                </div>
                <div className="buttons">
                    <Icon
                        id="fa-calendar-o"
                        margin="0 8px 0 0"
                        onClick={() => {}}
                    />
                    <Icon
                        id="fa-calendar-o"
                        margin="0 8px 0 0"
                        onClick={() => {}}
                    />
                </div>
            </div>
            <div className="post-text">{content}</div>
        </div>
    );
};

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .special-panel {
        margin: -20px 0 20px;
        font-size: 18px;
    }

    & .published-at {
        display: flex;
    }

    & i {
        position: relative;
        top: -6px;
        font-size: 18px;
    }

    .buttons {
        
    }
`;
