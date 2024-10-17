import PropTypes from 'prop-types'
import { useState } from "react";
import { styled } from "styled-components";
import { Icon } from "../../../../components";
import { Comment } from "./components/comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId, selectUserRole } from "../../../../selectors";
import { addCommentAsync } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { ROLE, PROP_TYPE } from "../../../../constants";

const CommentsContainer = ({ className, comments, postId }) => {
    const [newComment, setNewComment] = useState("");
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const userRole = useSelector(selectUserRole)
    const requestServer = useServerRequest();

    const isGuest = userRole === ROLE.GUEST

    const onNewCommentAdd = (postId, userId, content) => {
        dispatch(addCommentAsync(requestServer, postId, userId, content));
        setNewComment("");
    };
    return (
        <div className={className}>
            {!isGuest && (
                <div className="new-comment">
                    <textarea
                        name="comment"
                        value={newComment}
                        placeholder="Комментарий"
                        onChange={({ target }) => {
                            setNewComment(target.value);
                        }}
                    ></textarea>
                    <Icon
                        id="fa-paper-plane-o"
                        margin="0 0 0 10px"
                        size="18px"
                        onClick={() =>
                            onNewCommentAdd(userId, postId, newComment)
                        }
                    />
                </div>
            )}

            <div className="comments">
                {comments.map(({ id, author, content, publishedAt }) => (
                    <Comment
                        key={id}
                        postId={postId}
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
    width: 580px;
    margin: 20px auto;

    & .new-comment {
        width: 100%;
        display: flex;
        margin: 20px 0 0;
    }

    & .new-comment textarea {
        width: 550px;
        height: 120px;
        font-size: 18px;
        resize: none;
    }

    & .post-text {
        font-size: 18px;
    }
`;

Comments.propTypes = {
    comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
    postId: PropTypes.string.isRequired,
}