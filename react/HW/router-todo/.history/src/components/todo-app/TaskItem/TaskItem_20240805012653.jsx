import { useParams } from "react-router-dom"

export const TaskItem = ({todos}) => {
    const params = useParams()
    const currentTodo = todos.filter(todo => todo.id === +params.id ) 
    return (
        <div>
            <h3>Задача: </h3>
            {/* <p>{todos.map(todo => {
                return todo.id === +params.id ? todo.task : null
            })}</p> */}
            <p>{cu}</p>
            <div></div>
        </div>
    )
}
// {todo.complited === "true"
//                                         ? "выполнено ✅"
//                                         : "не выполнено ❌"}
// todo.complited === "true" ? "выполнено ✅" : "не выполнено ❌"