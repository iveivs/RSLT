import { loadSuccess } from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import { selectQuestions } from "../../selectors"

export const Main = () => {
    const dispatch = useDispatch()

    return (
        <>
            <h1>Quiz-Test</h1>
        </>
    )
}