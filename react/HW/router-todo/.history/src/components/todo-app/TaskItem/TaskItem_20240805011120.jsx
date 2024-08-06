import { useParams } from "react-router-dom"

export const TaskItem = ({todos}) => {
    const params = useParams()
    console.log('params.id', params.id);
    console.log('todos', todos);
    return (
        <div>
            <h3>Task Item</h3>
            <h1>{params.id}</h1>
            <p>{todos.map(todo => todo.id === +params.id ? todo.task : null)}</p>
        </div>
    )
}