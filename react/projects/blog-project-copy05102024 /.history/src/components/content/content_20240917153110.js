export const Content = ({ children, error }) => {
    return error ? (
        <>
                <H2> Ошибка </H2>
                <div>{errorMessage}</div>
            </>
    ) children
}