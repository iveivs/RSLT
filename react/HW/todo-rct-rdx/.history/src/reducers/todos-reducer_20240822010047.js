import { useRequestGetTodos } from "../hooks"

const { todos ,  isLoading } = useRequestGetTodos()
console.log("TODOS ");
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