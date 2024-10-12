import { H2 } from "../h2/H2";

const Div = styled.div`

`

export const Content = ({ children, error }) => {
    return error ? (
        <>
            <H2> Ошибка </H2>
            <div>{error}</div>
        </>
    ) : (
        children
    );
};
