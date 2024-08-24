// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./TaskItem.module.css";
// import { actionGetTodoById, actionDeleteTask, actionUpdateTodo} from '../../../actions'

// export const TaskItem = () => {
//     const params = useParams();
//     const navigate = useNavigate();
//     const dispatch = useDispatch()

//     const todo = useSelector((state) => state.todosState.selectedTodo)
//     let isLoading
//     useEffect(() => {
//         dispatch(actionGetTodoById(params.id))
//     }, [dispatch, params.id]);


//     const goBack = () => {
//         navigate(-1);
//     };
//     const handleDelete = async () => {
//         await dispatch(actionDeleteTask(params.id))
//         navigate(-1);
//     };

//     const handleUpdate = () => {
//         if(todo){
//             const updatedTodo = { ...todo, complited: !todo.complited }
//             dispatch(actionUpdateTodo(updatedTodo))
//         }
//     };

//     return (
//         <>
//             {!isLoading && todo && (
//                 <div className={styles.item_container}>
//                     <h3>Задача: {todo.task}</h3>
//                     <div>
//                         Статус:{" "}
//                         {todo.complited ? "выполнено ✅" : "не выполнено ❌"}
//                     </div>
//                     <div className={styles.button_item_box}>
//                         <button
//                             className={styles.list_btn}
//                             onClick={handleDelete}
//                         >
//                             Удалить
//                         </button>
//                         <button
//                             onClick={handleUpdate}
//                             className={styles.list_btn}
//                         >
//                             Поменять статус задачи
//                         </button>
//                         <button onClick={goBack} className={styles.list_btn}>
//                             Назад
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { actionGetTodoById, actionUpdateTodo, actionDeleteTodo } from "../../../actions/todosActions";
import styles from "./TaskItem.module.css";

export const TaskItem = () => {
    const { id } = useParams(); // Получаем ID задачи из URL
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const todo = useSelector((state) => state.todosState.selectedTodo); // Получаем выбранную задачу из стейта
    const isLoading = useSelector((state) => state.todosState.isLoading); // Проверка загрузки

    // Получаем задачу по ID при загрузке компонента
    useEffect(() => {
        dispatch(actionGetTodoById(id));
    }, [dispatch, id]);

    // Функция для возврата назад
    const goBack = () => {
        navigate(-1);
    };

    // Обработчик удаления задачи
    const handleDelete = async () => {
        await dispatch(actionDeleteTodo(id)); // Удаляем задачу по ID
        navigate(-1); // Переход назад после удаления
    };

    // Обработчик обновления статуса задачи
    const handleUpdate = () => {
        const updatedTodo = { ...todo, completed: !todo.completed }; // Изменяем поле completed
        dispatch(actionUpdateTodo(updatedTodo)); // Обновляем задачу через экшен
    };

    return (
        <>
            {!isLoading && todo && (
                <div className={styles.item_container}>
                    <h3>Задача: {todo.task}</h3>
                    <div>
                        Статус: {todo.completed ? "выполнено ✅" : "не выполнено ❌"}
                    </div>
                    <div className={styles.button_item_box}>
                        <button
                            className={styles.list_btn}
                            onClick={handleDelete}
                        >
                            Удалить
                        </button>
                        <button
                            onClick={handleUpdate}
                            className={styles.list_btn}
                        >
                            Поменять статус задачи
                        </button>
                        <button onClick={goBack} className={styles.list_btn}>
                            Назад
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

