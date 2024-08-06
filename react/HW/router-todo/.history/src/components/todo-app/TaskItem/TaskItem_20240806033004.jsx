import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./TaskItem.module.css";

export const TaskItem = ({ todos, requestDeleteTask, requestUpdateTodo }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState("Задача не найдена");

    const [currentTodo] = todos.filter((todo) => todo.id === +params.id);
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className={styles.item_container}>
            <h3>Задача: {currentTodo ? currentTodo.task : message}</h3>
            <div>
                Статус:{" "}
                {currentTodo
                    ? currentTodo.complited === "true"
                        ? "выполнено ✅"
                        : "не выполнено ❌"
                    : "Статус не найден"}
            </div>
            <div className={styles.button_item_box}>
                <button
                    className={styles.list_btn}
                    onClick={() => {
                        requestDeleteTask(currentTodo);
                        setMessage("Задача удалена");
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
                <button onClick={goBack} className={styles.list_btn}>
                    Назад
                </button>
            </div>
        </div>
    );
};
