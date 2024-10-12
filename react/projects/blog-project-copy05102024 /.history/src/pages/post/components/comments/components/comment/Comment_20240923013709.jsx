import { styled } from "styled-components";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
    return (
        <div className={className}>
            <div className="information-panel">
            <div className="author">{author}</div>
            <div className="published-at">{}</div>
            </div>
            <div className="comment-text">{content}</div>
        </div>
    );
};

export const Comment = styled(CommentContainer)``;
