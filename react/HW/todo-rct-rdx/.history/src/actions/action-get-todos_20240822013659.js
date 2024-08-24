
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

export const  = () => (dispatch) =>
    fetchUserDataMock().then((userDataFromServer) =>
        dispatch({
            type: 'CHANGE_USER',
            payload: userDataFromServer,
        }))