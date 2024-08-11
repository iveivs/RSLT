// import { useState, useEffect } from "react";
// // npm install -g json-server@0.17.4
// // npx json-server src/db.json запуск сервера

// import {
//     useRequestGetTodos,
//     useRequestAddSomeTodo,
//     useRequestUpdateTodo,
//     useRequestDeleteTask,
// } from "./hooks/";
// import { Form } from "./components/todo-app/forms/formAdd/Form";
// import { FormFind } from "./components/todo-app/forms/formFind/FormFind";
// import { CheckboxSort } from "./components/todo-app/CheckboxSort/CheckboxSort";
// import { TaskList } from "./components/todo-app/taskList/TaskList";
// import { AppContext } from "./context";
// import styles from "./App.module.css";
// function App() {
//     const [input, setInput] = useState("");
//     const [isChecked, setIsChecked] = useState(false);
//     const [fiindImput, setFindInput] = useState("");
// 	const [stateForTodos, setStateForTodos] = useState([])
//     // состояние обновления данных на странице
//     const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
//     // ф-я для обновления данных на странице
//     const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

//     let { isLoading, todos } = useRequestGetTodos(refreshTodosFlag);

// 	useEffect(() => {
// 		setStateForTodos(todos)
		
// 	}, [todos])
// 	// console.log('StateForTodos', stateForTodos);
// 	// console.log('Todos', todos);
//     const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
//         refreshTodos,
//         input
//     );

//     const { isDeleting, requestDeleteTask } =
//         useRequestDeleteTask(refreshTodos);

//     const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);
//     // клонируем список
//     let newTodos = [...stateForTodos];

//     let sortedTodos = newTodos.toSorted((a, b) => a.task.localeCompare(b.task));

//     isChecked ? setStateForTodos(sortedTodos)  : setStateForTodos(stateForTodos);

//     return (
//         <AppContext.Provider value={stateForTodos}>
//             <div className={styles.main}>
//                 <h1>Do it !</h1>
//                 <div className={styles.container_app}>
//                     <div className={styles.forms_container}>
//                         <Form
//                             input={input}
//                             setInput={setInput}
//                             requestAddSomeTodo={requestAddSomeTodo}
//                         />
//                         <FormFind
//                             fiindImput={fiindImput}
//                             setFindInput={setFindInput}
//                         />
//                     </div>
//                     <div className={styles.task_list}>
//                         <CheckboxSort
//                             isChecked={isChecked}
//                             setIsChecked={setIsChecked}
//                         />
//                         <TaskList
//                             todos={todos}
//                             isLoading={isLoading}
//                             requestDeleteTask={requestDeleteTask}
//                             requestUpdateTodo={requestUpdateTodo}
//                             fiindImput={fiindImput}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </AppContext.Provider>
//     );
// }

// export default App;
import { useState, useEffect } from "react";
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
    const [stateForTodos, setStateForTodos] = useState([]);

    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

    const { isLoading, todos } = useRequestGetTodos(refreshTodosFlag);

    useEffect(() => {
        setStateForTodos(todos);
    }, [todos]);

    useEffect(() => {
        if (isChecked) {
            const sortedTodos = [...stateForTodos].sort((a, b) =>
                a.task.localeCompare(b.task)
            );
            // Проверка на необходимость обновления состояния
            if (JSON.stringify(sortedTodos) !== JSON.stringify(stateForTodos)) {
                setStateForTodos(sortedTodos);
            }
        }
    }, [isChecked, todos]); // Убрана зависимость от stateForTodos

    const { isCreating, requestAddSomeTodo } = useRequestAddSomeTodo(
        refreshTodos,
        input
    );

    const { isDeleting, requestDeleteTask } = useRequestDeleteTask(refreshTodos);

    const { requestUpdateTodo } = useRequestUpdateTodo(refreshTodos);

    return (
        <AppContext.Provider value={stateForTodos}>
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
                            todos={stateForTodos}
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
