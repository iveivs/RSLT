import { useState } from "react"
import { styled } from "styled-components"

const CommentsContainer = ({ className }) => {
    const newComment = useState((''))
    return (
        <div className={className}>
            <textarea value={newComment} placeholder="Комментарий"></textarea>
            <div className="comments">
                {comments.map(() => (
                    
                ))}
            </div>
        </div>
    )
}

export const Comments = styled(CommentsContainer)`

`