export const useRequestUpdateTodo = async (currentTodo) => {
    try {
        const response =  fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(currentTodo),
        })
    }catch {

    }

};
