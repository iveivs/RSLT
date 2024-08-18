import { useState, useEffect } from "react";
import {
    useRequestGetTodos,
    useRequestAddSomeTodo,
    useRequestUpdateTodo,
    // useRequestDeleteTask,
} from "./hooks/";
import { Form } from "./components/todo-app/forms/formAdd/Form";
import { FormFind } from "./components/todo-app/forms/formFind/FormFind";
import { CheckboxSort } from "./components/todo-app/CheckboxSort/CheckboxSort";
import { TaskList } from "./components/todo-app/taskList/TaskList";
import { AppContext } from "./context";
import styles from "./App.module.css";

function App() {
    const [input, setInput] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [fiindImput, setFindInput] = useState("");
    const [stateForTodos, setStateForTodos] = useState([]);

    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

    const { isLoading, todos } = useRequestGetTodos(refreshTodosFlag);

    useEffect(() => {
        let updatedTodos = [...todos];
		// Сортировка
        if (isChecked) {
            updatedTodos = updatedTodos.sort((a, b) =>
                a.task.localeCompare(b.task)
            );
        }

        setStateForTodos(updatedTodos);
    }, [todos, isChecked]); // Обновляем список, когда меняются `todos` или `isChecked`

    const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
        refreshTodos,
        input
    );

    // const { isDeleting, requestDeleteTask } = useRequestDeleteTask(refreshTodos);

    const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);

    return (
        <AppContext.Provider value={{stateForTodos refreshTodos}}>
            <div className={styles.main}>
                <h1>Do it !</h1>
                <div className={styles.container_app}>
                    <div className={styles.forms_container}>
                        <Form
                            input={input}
                            setInput={setInput}
                            requestAddSomeTodo={requestAddSomeTodo}
                        />
                        <FormFind
                            fiindImput={fiindImput}
                            setFindInput={setFindInput}
                        />
                    </div>
                    <div className={styles.task_list}>
                        <CheckboxSort
                            isChecked={isChecked}
                            setIsChecked={setIsChecked}
                        />
                        <TaskList
                            isLoading={isLoading}
                            requestUpdateTodo={requestUpdateTodo}
                            fiindImput={fiindImput}
                        />
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
