// const useRequestGetTodos = () => {
//     let todos
//     let fetchTodos = fetch("http://localhost:3000/todos")
//             .then((loadedData) => loadedData.json())
//             .then((loadedTodos) => {
//                 // setTodos(loadedTodos);
//                 console.log('loadedTodos', loadedTodos);
//                 todos = loadedTodos
//             })
//             .finally();

//     return {
//         todos,
//         // isLoading,
//     }
// }

const { todos ,  isLoading } = useRequestGetTodos()
console.log("TODOS FROM REDUCER", todos);
export const initialTodosState = {}
export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
            }
        }
    }
}