// import { useRequestGetTodos } from "../hooks"

import { useEffect, useState } from "react";

const useRequestGetTodos = () => {
    // const [todos, setTodos] = useState([]);
    // const [isLoading, setIsloading] = useState(false);
    let dodos
    useEffect(() => {
        // спинер для загрузки
        // setIsloading(true);
        
    }, []);

    return {
        todos,
        isLoading,
    }
}

const { todos ,  isLoading } = useRequestGetTodos()
console.log("TODOS FROM REDUCER", todos);
export const initialTodosState = {}
export const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return {
                ...state,
            }
        }
    }
}