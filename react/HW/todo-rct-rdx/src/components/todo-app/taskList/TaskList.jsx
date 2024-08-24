import { Link } from "react-router-dom";
import { CheckboxSort } from "../CheckboxSort/CheckboxSort";
import styles from "./TaskList.module.css";
import { FormFind } from "../forms/formFind/FormFind";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actionGetTodos } from '../../../actions/action-get-todos';

export const TaskList = () => {
    const [findInput, setFindInput] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todosState.todos); // не стал отдельно выносить селекторы
    const isLoading = useSelector((state) => state.todosState.isLoading) // но если нужно, могу сделать

    useEffect(() => {
        dispatch(actionGetTodos());
    }, [dispatch]);

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
            {!isLoading || todos.length === 0 ? (
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
