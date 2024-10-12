import { styled } from "styled-components"

const CommentsContainer = ({ className }) => {
    const newComment = useS
    return (
        <div className={className}>
            <textarea value={newComment}></textarea>
        </div>
    )
}

export const Comments = styled(CommentsContainer)`

`