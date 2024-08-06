// import { useParams } from "react-router-dom"

// export const TaskItem = ({todos}) => {
//     const params = useParams()
//     console.log('todos', todos);
//     const [currentTodo] = todos.filter(todo => todo.id === +params.id ) 
//     console.log('currentTodo', typeof currentTodo);
//     console.log('currentTodo', currentTodo.task);
//     return (
//         <div>
//             <h3>Задача: </h3>
//             <div></div>
//         </div>
//     )
// }
// // {todo.complited === "true"
// //                                         ? "выполнено ✅"
// //                                         : "не выполнено ❌"}
// // todo.complited === "true" ? "выполнено ✅" : "не выполнено ❌"


import { useParams } from "react-router-dom";

export const TaskItem = ({ todos }) => {
    const params = useParams();
    // console.log('todos', todos);

    const [currentTodo] = todos.filter(todo => todo.id === +params.id);
    // console.log('currentTodo', typeof currentTodo);

    // if (currentTodo) {
    //     console.log('currentTodo', currentTodo.task);
    // } else {
    //     console.log('currentTodo is undefined');
    // }

    return (
        <div>
            <h3>Задача: {currentTodo ? currentTodo.task : 'Задача не найдена'}</h3>
            <div>Статус {currentTodo ? currentTodo.complited === "true" ? "выполнено ✅" : "не выполнено ❌" : ' не найдена'}</div>
            <div></div>
        </div>
    );
};
