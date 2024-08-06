import { useParams } from "react-router-dom"

export const TaskItem = () => {
    const params = useParams()
    return (
        <div>
            <h3>Task Item</h3>
            <h1></h1>
        </div>
    )
}