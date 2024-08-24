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

const useRequestGetTodos = async () => {
    let todos;
    try {
        const response = await fetch("http://localhost:3000/todos");
        const loadedTodos = await response.json();
        console.log('loadedTodos', loadedTodos);
        todos = loadedTodos;
    } catch (error) {
        console.error('Ошибка при загрузке todos:', error);
    }

    return {
        todos,
    };
};

const { todos } = useRequestGetTodos()
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