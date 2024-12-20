// import { Children } from "react";
import { styled } from "styled-components";
const buttonContainer = ({ children, className, width, ...props}) => {
    return <button>{children}</button>
}

export const Button = styled(buttonContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 100px;
    height: 32px;
    border: 1px solid rgb(0, 0, 0);
    background-color: rgb(238, 238, 238);
`   