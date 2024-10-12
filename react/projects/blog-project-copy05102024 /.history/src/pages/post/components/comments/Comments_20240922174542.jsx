import { useState } from "react";
import { styled } from "styled-components";

const CommentsContainer = ({ className }) => {
    const newComment = useState("");
    return (
        <div className={className}>
            <div>

            </div>
            
            <div className="comments">
                {comments.map(({ id, author, content, publishedAt }) => (
                    <Comment
                        key={id}
                        id={id}
                        author={author}
                        content={content}
                        publishedAt={publishedAt}
                    />
                ))}
            </div>
        </div>
    );
};

export const Comments = styled(CommentsContainer)``;
