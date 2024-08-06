import { useParams } from "react-router-dom"

export const TaskItem = ({todos}) => {
    const params = useParams()
    // console.log('params.id', params.id);
    // console.log('todos', todos);
    return (
        <div>
            <h3>Задача: </h3>
            <p>{todos.map(todo => {
                return todo.id === +params.id ? todo.task : null
            })}</p>
            <div>{todos.map((todo) => (
                todo.id === +params.id ? todo.task : null 
            )
                
        )}</div>
            <div></div>
        </div>
    )
}
// {todo.complited === "true"
//                                         ? "выполнено ✅"
//                                         : "не выполнено ❌"}
todo.complited === "true" ? "выполнено ✅" : "не выполнено ❌"