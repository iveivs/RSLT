import { useEffect, useReducer } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { UserBlock } from "./components/user-block/UserBlock";
import { store } from 
// import { AppContext } from "./context";

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



function App() {
    const [userData, dispatch] = useReducer(reducer, {});

    useEffect(() => {
        const userDataFromServer = getUserFromServer();

        dispatch({ type: "SET_USER_DATA", payload: userDataFromServer });
    }, []);

    const onUserChange = () => {
        const anotherUserDataFromServer = getAnotherUserFromServer();

        // setUserData(anotherUserDataFromServer);
        dispatch({ type: "SET_USER_DATA", payload: anotherUserDataFromServer });
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
