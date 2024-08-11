import { useState, useEffect } from "react";
// npm install -g json-server@0.17.4
// npx json-server src/db.json запуск сервера

import {
    useRequestGetTodos,
    useRequestAddSomeTodo,
    useRequestUpdateTodo,
    useRequestDeleteTask,
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
	const [stateForTodos, setStateForTodos] = useState()
    // состояние обновления данных на странице
    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
    // ф-я для обновления данных на странице
    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

    let { isLoading, todos } = useRequestGetTodos(refreshTodosFlag);

	setStateForTodos(todos)
	
    const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
        refreshTodos,
        input
    );

    const { isDeleting, requestDeleteTask } =
        useRequestDeleteTask(refreshTodos);

    const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);
    // клонируем список
    let newTodos = [...todos];

    let sortedTodos = newTodos.toSorted((a, b) => a.task.localeCompare(b.task));

    isChecked ? (todos = sortedTodos) : (todos = todos);

    return (
        <AppContext.Provider>
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
                            todos={todos}
                            isLoading={isLoading}
                            requestDeleteTask={requestDeleteTask}
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
