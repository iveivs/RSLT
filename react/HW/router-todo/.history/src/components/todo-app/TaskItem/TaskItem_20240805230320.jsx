import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ todos, requestDeleteTask, requestUpdateTodo }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState()

    const [currentTodo] = todos.filter((todo) => todo.id === +params.id);
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <h3>
                Задача: {currentTodo ? currentTodo.task : "Задача не найдена"}
            </h3>
            <div>
                Статус:{" "}
                {currentTodo
                    ? currentTodo.complited === "true"
                        ? "выполнено ✅"
                        : "не выполнено ❌"
                    : "Статус не найден"}
            </div>
            <button
                className={styles.list_btn}
                onClick={() => {
                    requestDeleteTask(currentTodo);
                    // navigate(-1)
                }}
            >
                Удалить
            </button>
            <button
                onClick={() => {
                    requestUpdateTodo(currentTodo);
                }}
                className={styles.list_btn}
            >
                Поменять статус задачи
            </button>
            <button onClick={goBack}>Назад</button>
        </div>
    );
};
