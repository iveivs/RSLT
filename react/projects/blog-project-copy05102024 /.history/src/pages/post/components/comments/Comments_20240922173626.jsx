import { useState } from "react"
import { styled } from "styled-components"

const CommentsContainer = ({ className }) => {
    const newComment = useState((''))
    return (
        <div className={className}>
            <textarea value={newComment} placeholder="Комментарий"></textarea>
        </div>
    )
}

export const Comments = styled(CommentsContainer)`

`