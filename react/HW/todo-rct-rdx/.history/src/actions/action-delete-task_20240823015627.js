export const useRequestDeleteTask = async () => {
    try {
        const response = fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: "DELETE",
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log("Задача удалена с сервера", response);
            })
            .finally();
    }
        
    
    
};

export const actionDeleteTask = (todo) => {


}