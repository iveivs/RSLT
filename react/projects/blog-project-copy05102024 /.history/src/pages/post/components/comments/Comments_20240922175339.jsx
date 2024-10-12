import { useState } from "react";
import { styled } from "styled-components";
import { Icon } from "../../../../components";
import { Comment } from "./components/comment/Comment";

const CommentsContainer = ({ className, comments }) => {
    const newComment = useState("");
    return (
        <div className={className}>
            <div className="new-comment">
                <textarea
                    value={newComment}
                    placeholder="Комментарий"
                ></textarea>
                <Icon
                    id="fa--o"
                    margin="0 7px 0 0"
                    size="18px"
                    onClick={() => {}}
                />
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
