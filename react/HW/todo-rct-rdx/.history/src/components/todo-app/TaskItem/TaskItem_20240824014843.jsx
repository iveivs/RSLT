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
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskItem.module.css";
import { actionGetTodoById, actionDeleteTask, actionUpdateTodo } from '../../../actions';

export const TaskItem = () => {
    const { id } = useParams(); // Извлечение id через деструктуризацию
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Получаем выбранную задачу и статус загрузки из состояния Redux
    const todo = useSelector((state) => state.todosState.selectedTodo);
    const isLoading = useSelector((state) => state.todosState.isLoading); // isLoading берётся из состояния Redux

    // Используем useEffect для загрузки задачи по id при монтировании компонента
    useEffect(() => {
        dispatch(actionGetTodoById(id));
    }, [dispatch, id]);

    const goBack = () => {
        navigate(-1);
    };

    // Обработчик для удаления задачи
    const handleDelete = async () => {
        await dispatch(actionDeleteTask(id)); // передаём id для удаления задачи
        navigate(-1);
    };

    // Обработчик для обновления задачи
    const handleUpdate = () => {
        if (todo) {
            const updatedTodo = { ...todo, complited: !todo.complited }; // Заменили на "complited"
            dispatch(actionUpdateTodo(updatedTodo));
        }
    };

    return (
        <>
            {/* Проверка на isLoading и наличие задачи перед отображением */}
            {!isLoading && todo && (
                <div className={styles.item_container}>
                    <h3>Задача: {todo.task}</h3>
                    <div>
                        Статус: {todo.complited ? "выполнено ✅" : "не выполнено ❌"} {/* Заменили на "complited" */}
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
