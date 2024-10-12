import { styled } from "styled-components";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
    return (
        <div className={className}>
            <div className="information-panel">
                
            </div>
            <div className="comment-text">{content}</div>
        </div>
    );
};

export const Comment = styled(CommentContainer)``;
