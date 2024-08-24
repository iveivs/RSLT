import { useState, useEffect } from "react";
// npm install -g json-server@0.17.4
// npx json-server src/db.json запуск сервера
import { Form } from "./components/todo-app/forms/formAdd/Form";
import { TaskList } from "./components/todo-app/taskList/TaskList";
import { Routes, Route } from "react-router-dom";
import { TaskItem } from "./components/todo-app/TaskItem/TaskItem";
import styles from "./App.module.css";
import { NotFound } from "./components/todo-app/NotFound/NotFound";
import 

function App() {
    return (
        <div className={styles.main}>
            <h1>Do it !</h1>
            <div className={styles.container_app}>
                <div className={styles.forms_container}>
                    <Form />
                </div>
                <div className={styles.task_list}>
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                        <Route path="/task/:id" element={<TaskItem />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
