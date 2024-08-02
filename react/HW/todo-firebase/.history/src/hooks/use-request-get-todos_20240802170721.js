import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database"
import { db } from "../firebase";

export const useRequestGetTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const todosDbRef = ref(db, 'todos')

        return onValue(todosDbRef, (snapshot) => {
            const loadedTodos = snapshot.val() || 
            let convertedLoadedData = Object.entries(loadedTodos)
            let finaldata = convertedLoadedData.map(elem => elem = {id: `${elem[0]}`, task: `${elem[1].task}`, complited: `${elem[1].complited}`})
            setTodos(finaldata)
            setIsloading(false)
        })
    }, []);

    return {
        todos,
        isLoading,
    }
}
