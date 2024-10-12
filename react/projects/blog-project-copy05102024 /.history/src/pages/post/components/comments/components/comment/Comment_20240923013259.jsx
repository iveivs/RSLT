import { styled } from "styled-components";

const CommentContainer = ({ className }) => {
    return (
        <div className={className}>
            <div className={className}></div>
        </div>
    );
};

export const Comment = styled(CommentContainer)``;
