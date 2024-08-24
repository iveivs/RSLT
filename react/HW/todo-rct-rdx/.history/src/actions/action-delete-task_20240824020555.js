export const useRequestDeleteTask = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
        });

        const jsonResponse = await response.json();
        // console.log("Задача удалена с сервера", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Ошибка при удалении задачи:", error);
        throw error;
    }
};


export const actionDeleteTask = (id) => {
    return async (dispatch) => {
        try {
            await useRequestDeleteTask(id);
            dispatch({
                type: 'DELETE_TODO',
                payload: id,  
            });
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
    };
};
