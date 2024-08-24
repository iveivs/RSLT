import { useState } from "react";
import styles from "./Form.module.css";
// import { useRequestAddSomeTodo } from "../../../../hooks";
export const Form = ({ refreshTodos }) => {
    const [input, setInput] = useState("");

    const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
        refreshTodos,
        input
    );
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        requestAddSomeTodo(refreshTodos, input);
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
                disabled={isCreating || !input}
                type="submit"
            >
                Добавить задачу
            </button>
        </form>
    );
};
