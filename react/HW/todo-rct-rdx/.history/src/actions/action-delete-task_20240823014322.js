export const useRequestDeleteTask = () => {

    const requestDeleteTask = (todo) => {
        setIsDeleting(true);

        fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "DELETE",
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Задача удалена с сервера", response);
            })
            .finally();
    }
    
};

export const actionDeleteTask = () => {


}