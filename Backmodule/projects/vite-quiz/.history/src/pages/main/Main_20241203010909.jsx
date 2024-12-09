import { useDispatch, useSelector } from "react-redux"
import { selectQuestions } from "../../selectors/select-questions"
import { loadSuccess } from "../../actions"
import { useEffect } from "react"
import { useState } from "react"
import { getQuestions } from "../../utils/utils"

export const Main = () => {
    const dispatch = useDispatch()
    const [questions, setQuestions] = useState()

    useEffect(() => {
        dispatch(loadSuccess())
        getQuestions().then((serverData) => setQuestions(serverData));
    }, [])

    return (
        <>
            <h1>Quiz-Test</h1>
        </>
    )
}