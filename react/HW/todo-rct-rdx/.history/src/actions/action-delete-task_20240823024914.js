export const useRequestDeleteTask = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: "DELETE",
        });

        const jsonResponse = await response.json();
        console.log("Задача удалена с сервера", jsonResponse);
        return jsonResponse;
    } catch (error) {
        console.error("Ошибка при удалении задачи:", error);
        throw error;
    }
};


export const actionDeleteTask = (id) => {
    return async (dispatch) => {
        try {
            // Удаляем задачу с сервера
            await useRequestDeleteTask(id);
            
            // Отправляем действие для удаления задачи из состояния
            dispatch({
                type: 'DELETE_TODO',
                payload: id,  // Передаем id задачи для удаления из состояния
            });
        } catch (error) {
            console.error('Ошибка при удалении задачи:', error);
        }
    };
};
