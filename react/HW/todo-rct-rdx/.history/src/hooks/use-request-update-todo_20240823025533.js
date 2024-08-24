// import { useState } from "react";

// // ф-я для обновления товара
// export const useRequestUpdateTodo = (refreshTodos) => {
//     const [isUpdating, setIsUpdating] = useState(false);

//     const requestUpdateTodo = async (currentTodo) => {
//         setIsUpdating(true);

//         fetch(`http://localhost:3000/todos/${currentTodo.id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json;charset=utf-8" },
//             body: JSON.stringify(currentTodo),
//         })
//             .then(() => {
//                 refreshTodos();
//             })
//             .finally(() => setIsUpdating(false));
//     };

//     return {
//         isUpdating,
//         requestUpdateTodo,
//     };
// };
