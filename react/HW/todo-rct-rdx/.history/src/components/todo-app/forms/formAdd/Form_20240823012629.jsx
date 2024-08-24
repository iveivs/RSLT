import { useState } from "react";
import styles from "./Form.module.css";
import { useDispatch } from 'react-redux';
import { actionAddTodo } from '../../../../actions/action-add-some-todo';

export const Form = ({ refreshTodos }) => {
    const [input, setInput] = useState("");
    const [isCreating, setIsCreating] = useState(false);  // Добавляем флаг состояния
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!input) return;

        setIsCreating(true);  // Устанавливаем флаг перед началом запроса
        try {
            await dispatch(actionAddTodo(input));  // Ждем завершения запроса
            setInput("");  // Очищаем поле ввода только после успешного запроса
        } catch (error) {
            console.error("Ошибка при добавлении задачи:", error);
        } finally {
            setIsCreating(false);  // Снимаем флаг после завершения
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={styles.task_input}
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Введите новую задачу"
            />
            <br />
            <button
                className={styles.form_button}
                disabled={isCreating || !input}  // Блокируем кнопку, если идет запрос или поле пусто
                type="submit"
            >
                Добавить задачу
            </button>
        </form>
    );
};
