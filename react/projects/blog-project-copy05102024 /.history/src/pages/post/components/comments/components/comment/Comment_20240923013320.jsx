import { styled } from "styled-components";

const CommentContainer = ({ className }) => {
    return (
        <div className={className}>
            <div className="information"></div>
        </div>
    );
};

export const Comment = styled(CommentContainer)``;