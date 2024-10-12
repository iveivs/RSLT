import styled from 'styled-components'
const InputContainer = ({ className, ...props }) => {
    return (
        <input className={className} {...props}/>
    )
}

export const Input = styled(InputContainer)`
    
`