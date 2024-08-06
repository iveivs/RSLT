import { useParams } from "react-router-dom";
import styles from './'
export const TaskItem = ({ todos }) => {
    const params = useParams();


    const [currentTodo] = todos.filter(todo => todo.id === +params.id);

    return (
        <div>
            <h3>Задача: {currentTodo ? currentTodo.task : 'Задача не найдена'}</h3>
            <div>Статус: {currentTodo ? currentTodo.complited === "true" ? "выполнено ✅" : "не выполнено ❌" : 'Статус не найден'}</div>
            <button
						className={styles.list_btn}
						onClick={() => {
							requestDeleteTask(currentTodo);
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
					</button>
        </div>
    );
};
