/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CheckboxSort } from "../CheckboxSort/CheckboxSort";
import styles from "./TaskList.module.css";
import { FormFind } from "../forms/formFind/FormFind";
import { useState } from "react";
import { useRequestGetTodos } from "../../../hooks";
// export const TaskList = ({ refreshTodosFlag }) => {
export const TaskList = () => {
    const [findInput, setFindInput] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    // const { isLoading, todos } = useRequestGetTodos(refreshTodosFlag);
    let todos = {}
    let newTodos = [...todos];

    newTodos = newTodos.filter((elem) =>
        elem.task.toLowerCase().includes(findInput.toLowerCase())
    );

    let sortedTodos = isChecked
        ? newTodos.toSorted((a, b) => a.task.localeCompare(b.task))
        : newTodos;

    return (
        <>
            <CheckboxSort setIsChecked={setIsChecked} isChecked={isChecked} />
            <FormFind findInput={findInput} setFindInput={setFindInput} />
            {isLoading || todos.length === 0 ? (
                <div className="loader">Список дел пуст</div>
            ) : (
                sortedTodos.map((todo) => (
                    <Link
                        key={todo.id}
                        className={styles.item_link}
                        to={`/task/${todo.id}`}
                    >
                        <div className={styles.list_item}>
                            <div className={styles.task_text}>
                                {todo.task.length > 20
                                    ? todo.task.slice(0, 19) + "..."
                                    : todo.task}
                            </div>
                            <div className={styles.list_item_status}>
                                {todo.complited
                                    ? "выполнено ✅"
                                    : "не выполнено ❌"}
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </>
    );
};
