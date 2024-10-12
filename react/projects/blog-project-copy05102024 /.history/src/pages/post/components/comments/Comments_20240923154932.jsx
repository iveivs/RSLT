import { useState } from "react";
import { styled } from "styled-components";
import { Icon } from "../../../../components";
import { Comment } from "./components/comment/Comment";

const CommentsContainer = ({ className, comments, postId }) => {
    const [newComment, setNewComment] = useState("");

    const onNewCommentAdd = (postId) => {
        
    }
    return (
        <div className={className}>
            <div className="new-comment">
                <textarea
                    name="comment"
                    value={newComment}
                    placeholder="Комментарий"
                    onChange={({ target }) => {setNewComment(target.value)}}
                ></textarea>
                <Icon
                    id="fa-paper-plane-o"
                    margin="0 0 0 10px"
                    size="18px"
                    onClick={() => onNewCommentAdd(postId)}
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

export const Comments = styled(CommentsContainer)`
    display: flex;
    width: 580px;
    margin: 20px auto;

    & .new-comment {
        width: 100%;
        display: flex;
        margin: 20px 0 0;
    }

    & .new-comment textarea {
        width: 100%;
        height: 120px;
        font-size: 18px;
        resize: none;
    }

    & .post-text {
        font-size: 18px;
    }
`;
