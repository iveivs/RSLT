import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TaskItem.module.css";
import { actionGetTodoById, actionDeleteTask, actionUpdateTodo} from '../../../actions'

export const TaskItem = ({ refreshTodos }) => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // const [todo, setTodo] = useState(null);
    // const { getTodoById, isLoading } = useRequestGetTodoById(params.id);

    

    useEffect(() => {
        // getTodoById().then((data) => setTodo(data));
        const todo = actionGetTodoById(params.id)
    }, []);

    // const { isDeleting, requestDeleteTask } =
        // useRequestDeleteTask(refreshTodos);
    // const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);

    const goBack = () => {
        navigate(-1);
    };
    const handleDelete = async () => {
        // await requestDeleteTask(todo);
        navigate(-1);
    };

    const handleUpdate = () => {
        const updateTodo = { ...todo, complited: !todo.complited };
        setTodo(updateTodo);
        requestUpdateTodo(updateTodo);
    };

    return (
        <>
            {!isLoading && todo && (
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
