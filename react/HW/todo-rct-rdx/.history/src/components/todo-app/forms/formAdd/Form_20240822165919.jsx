import { useState } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from 'react-redux';
// import { useRequestAddSomeTodo } from "../../../../hooks";
export const Form = ({ refreshTodos }) => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    // const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
    //     refreshTodos,
    //     input
    // );
    let isCreating
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
        dis
        // requestAddSomeTodo(refreshTodos, input);
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
