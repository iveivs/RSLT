import { H2 } from "../h2/H2"
export const Content = ({ children, error }) => {
    return error ? (
        <>
            <H2> Ошибка </H2>
            <div>{errorMessage}</div>
        </>
    ) : ( 
        children
    
}