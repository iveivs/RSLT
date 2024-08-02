import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database"
import { db } from "../firebase";

export const useRequestGetTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const todosDbRef = ref(db, 'todo')

        return onValue(todosDbRef, (snapshot) => {
            const loadedTodos = snapshot.val()

            setTodos(loadedTodos)
            setIsloading(false)
        })
    }, []);

    return {
        todos,
        isLoading,
    }
}
