import { Link } from "react-router-dom";
import styles from "./TaskList.module.css";
export const TaskList = ({
    todos,
    isLoading,
    requestDeleteTask,
    requestUpdateTodo,
    fiindImput,
}) => {
    return (
        <>
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
                        <Link key={todo.id} className={styles.item_link} to="">
                            <div className={styles.list_item}>
                                <div className={styles.task_text}>
                                    {todo.task}
                                </div>
                                <div className={styles.list_item_status}>
                                    {todo.complited === "true"
                                        ? "выполнено ✅"
                                        : "не выполнено ❌"}
                                </div>
                                {/* <button
						className={styles.list_btn}
						onClick={() => {
							requestDeleteTask(todo);
						}}
					>
						Удалить
					</button>
					<button
						onClick={() => {
							requestUpdateTodo(todo);
						}}
						className={styles.list_btn}
					>
						Поменять статус задачи
					</button> */}
                            </div>
                        </Link>
                    ))
            )}
        </>
    );
};
