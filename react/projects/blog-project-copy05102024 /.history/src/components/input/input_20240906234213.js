import styled from 'styled-components'
const InputContainer = ({ className, ...props }) => {
    return (
        <input className={className} {...props}/>
    )
}

export const Input = styled(InputContainer)`
    height: 40px;
    margin: 0 0 10px;
    border
`