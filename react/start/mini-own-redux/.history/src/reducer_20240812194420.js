

export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_USER_DATA":
            return payload;

        case "SET_USER_AGE":
            return {
                ...state,
                age: payload,
            };
        default:
            // ничего не делать
            return state;
    }
};