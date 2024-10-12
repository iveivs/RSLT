import { styled } from "styled-components"

const CommentsContainer = ({ className }) => {
    return (
        <div className={className}>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
    )
}

export const Comments = styled(CommentsContainer)`

`