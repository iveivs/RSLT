import { useDispatch, useSelector } from "react-redux"
import { selectQuestions } from "../../selectors/select-questions"
import { loadSuccess } from "../../actions"
import { useEffect } from "react"

export const Main = () => {
    const dispatch = useDispatch()

    useEffect(())

    return (
        <>
            <h1>Quiz-Test</h1>
        </>
    )
}