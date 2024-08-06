import { useParams } from "react-router-dom"

export const TaskItem = ({todos}) => {
    const params = useParams()
    console.log('todos', todos);
    const [currentTodo] = todos.filter(todo => todo.id === +params.id ) 
    console.log('currentTodo', currentTodo);
    return (
        <div>
            <h3>Задача: </h3>
            <p>{currentTodo.task ?? }</p>
            <div></div>
        </div>
    )
}
// {todo.complited === "true"
//                                         ? "выполнено ✅"
//                                         : "не выполнено ❌"}
// todo.complited === "true" ? "выполнено ✅" : "не выполнено ❌"