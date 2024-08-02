import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database"
import { db } from "../firebase";

export const useRequestGetTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const todosDbRef = ref(db, 'todos')

        return onValue(todosDbRef, (snapshot) => {
            const loadedTodos = snapshot.val() || []
            console.log('loadedTodos', loadedTodos);
            let convertedLoadedData = Object.entries(loadedTodos)
            console.log('convertedLoadedData', convertedLoadedData);
            let finaldata = convertedLoadedData.map(elem => elem = {id: `${elem[0]}`, task: `${elem[2].task}`, complited: `${}`})
            setTodos(loadedTodos)
            setIsloading(false)
        })
    }, []);

    return {
        todos,
        isLoading,
    }
}
