import styled from "styled-components";
const H2Container = ({ className}) => {
    return (
        <h2>
            {children}
        </h2>
    )
}

export const H2 = styled(H2Container)`
    margin: 40px 0;
`