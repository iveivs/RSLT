import { useState, useEffect, useReducer } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { UserBlock } from "./components/user-block/UserBlock";
import { AppContext } from "./context";

const getUserFromServer = () => ({
    id: "001",
    name: "Eman",
    age: 123,
    phone: 987654321,
    email: "qwe@asd.zxc",
});

const getAnotherUserFromServer = () => ({
    id: "002",
    name: "Some",
    age: 321,
    phone: 9876543210,
    email: "qwe@asd.zxc",
});

const reducer = (state, action) => {
  const { type, payload } = action;

    switch (type) {
        case "SET_USER_DATA":
          return payload

        case "SET_USER_AGE":
          return {
            ...state,
            age: payload, 
          }
        default:
        // ничего не делать
        return state
    }
}

function App() {
    const [userData, setUserData] = use({});

    const dispatch = (action) => {
        const newState = reducer(userData, action)

        setUserData(newState)
    };

    useEffect(() => {
        const userDataFromServer = getUserFromServer();

        setUserData(userDataFromServer);
    }, []);

    const onUserChange = () => {
        const anotherUserDataFromServer = getAnotherUserFromServer();

        setUserData(anotherUserDataFromServer);
    };

    return (
        <AppContext.Provider value={{ userData, dispatch }}>
            <div>
                <h1>context api</h1>
                <Header />
                <UserBlock />
                <button onClick={onUserChange}>Сменить пользователя</button>
            </div>
        </AppContext.Provider>
    );
}

export default App;
