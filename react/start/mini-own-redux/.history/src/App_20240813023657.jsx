import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { UserBlock } from "./components/user-block/UserBlock";
import { store } from "./store";
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
    // const [renderStore, setRenderStore] = useState(true)
    useEffect(() => {
        const userDataFromServer = getUserFromServer();

        store.dispatch({ type: "SET_USER_DATA", payload: userDataFromServer });

    }, []);

    const onUserChange = () => {
        const anotherUserDataFromServer = getAnotherUserFromServer();

        store.dispatch({
            type: "SET_USER_DATA",
            payload: anotherUserDataFromServer,
        });
    };

    return (
        <div>
            <h1>context api</h1>
            <Header />
            <UserBlock />
            <button onClick={onUserChange}>Сменить пользователя</button>
        </div>
    );
}

export default App;
