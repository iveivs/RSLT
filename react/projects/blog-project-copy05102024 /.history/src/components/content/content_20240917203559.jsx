import { H2 } from "../h2/H2";
import { styled } from "styled-components";

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Content = ({ children, error }) => {
    console.log('TEST');
    return error ? (
        <Div>
            <H2> Ошибка </H2>
            <div>{error}</div>
        </Div>
    ) : (
        children
    );
};
