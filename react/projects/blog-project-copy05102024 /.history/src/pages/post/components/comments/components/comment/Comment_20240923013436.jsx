import { styled } from "styled-components";

const CommentContainer = ({ className, id, a }) => {
    return (
        <div className={className}>
            <div className="information-panel"></div>
            <div className="comment-text">{}</div>
        </div>
    );
};

export const Comment = styled(CommentContainer)``;
