import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database"
import { db } from "../firebase";

export const useRequestGetTodos = (refreshTodosFlag) => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const todosDbRef = ref(db, 'todo')

        onValue(todosDbRef, (snapshot) => {
            const loadedTodos = snapshot.val()

            setTodos(loadedTodos)
            setIsloading(false)
        })
        setIsloading(true);
    }, [refreshTodosFlag]);

    return {
        todos,
        isLoading,
    }
}
