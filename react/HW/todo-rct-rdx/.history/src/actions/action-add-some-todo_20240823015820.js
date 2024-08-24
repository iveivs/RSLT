// const useRequestAddSomeTodo = async (input) => {
//     try {
//         const response = await fetch("http://localhost:3000/todos", {
//             method: "POST",
//             headers: { "Content-Type": "application/json;charset=utf-8" },
//             body: JSON.stringify({
//                 task: input,
//                 completed: false,  
//             }),
//         });

//         const jsonResponse = await response.json();
//         console.log("Задача добавлена", jsonResponse);
//         return jsonResponse;
//     } catch (error) {
//         console.error("Ошибка при добавлении задачи:", error);
//         throw error;
//     }
// };

const useRequestAddSomeTodo =  (input) => {
    try {
        const response =  fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify({
                task: input,
                completed: false,  
            }),
        });

        const jsonResponse =  response.json();
        console.log("Задача добавлена", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Ошибка при добавлении задачи:", error);
        throw error;
    }
};

export const actionAddTodo = (todo) => {
    return async (dispatch) => {
        try {
            const addedTodo = await useRequestAddSomeTodo(todo); 
            dispatch({
                type: 'ADD_TODO', 
                payload: addedTodo,
            });
        } catch (error) {
            console.error('Ошибка при отправке todos:', error);
        }
    };
};


