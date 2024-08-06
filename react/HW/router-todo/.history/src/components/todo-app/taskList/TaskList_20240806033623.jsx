import { Link } from "react-router-dom";
import { CheckboxSort } from "../CheckboxSort/CheckboxSort";
import styles from "./TaskList.module.css";
export const TaskList = ({
    todos,
    isLoading,
    fiindImput,
    setIsChecked,
    isChecked,
}) => {
    return (
        <>
            <CheckboxSort setIsChecked={setIsChecked} isChecked={isChecked} />
            {isLoading || todos.length === 0 ? (
                <div className="loader">Список дел пуст</div>
            ) : (
                todos
                    .filter((elem) =>
                        elem.task
                            .toLowerCase()
                            .includes(fiindImput.toLowerCase())
                    )
                    .map((todo) => (
                        <Link
                            key={todo.id}
                            className={styles.item_link}
                            to={`/task/${todo.id}`}
                        >
                            <div className={styles.list_item}>
                                <div className={styles.task_text}>
                                    {/* {todo.task} */}
                                    {todo.task.length > 20 ? todo.task.sl}
                                </div>
                                <div className={styles.list_item_status}>
                                    {todo.complited === "true"
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
