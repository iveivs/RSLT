import { H2 } from "../h2/H2";
import { styled } from "styled-components";

const Div = styled.div`

`

export const Content = ({ children, error }) => {
    return error ? (
        <Div>
            <H2> Ошибка </H2>
            <div>{error}</div>
        </Div>
    ) : (
        children
    );
};
