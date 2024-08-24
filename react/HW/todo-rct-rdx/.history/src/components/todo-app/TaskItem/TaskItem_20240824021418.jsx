import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskItem.module.css";
import { actionGetTodoById, actionDeleteTask, actionUpdateTodo} from '../../../actions'

export const TaskItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const todo = useSelector((state) => state.todosState.selectedTodo) // не стал отдельно выносить селекторы
    const isLoading = useSelector((state) => state.todosState.isLoading) // но если нужно, могу 
    useEffect(() => {
        dispatch(actionGetTodoById(id))
    }, [dispatch, params.id]);


    const goBack = () => {
        navigate(-1);
    };
    const handleDelete = async () => {
        await dispatch(actionDeleteTask(params.id))
        navigate(-1);
    };

    const handleUpdate = () => {
        if(todo){
            const updatedTodo = { ...todo, complited: !todo.complited }
            dispatch(actionUpdateTodo(updatedTodo))
        }
    };

    return (
        <>
            {isLoading && todo && (
                <div className={styles.item_container}>
                    <h3>Задача: {todo.task}</h3>
                    <div>
                        Статус:{" "}
                        {todo.complited ? "выполнено ✅" : "не выполнено ❌"}
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
