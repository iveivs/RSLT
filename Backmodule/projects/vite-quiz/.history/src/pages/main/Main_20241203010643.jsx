import { useDispatch, useSelector } from "react-redux"
import { selectQuestions } from "../../selectors/select-questions"
import { loadSuccess } from "../../actions"
import { useEffect } from "react"

export const Main = () => {
    const dispatch = useDispatch()
    const

    useEffect(() => {
        dispatch(loadSuccess())
    }, [])

    return (
        <>
            <h1>Quiz-Test</h1>
        </>
    )
}