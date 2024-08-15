import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { UserBlock } from "./components/user-block/UserBlock";
import { store } from "./store";


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
    const [renderStore, setRenderStore] = useState()
    useEffect(() => {
        const userDataFromServer = getUserFromServer();

        store.dispatch({ type: "SET_USER_DATA", payload: userDataFromServer });
        setRenderStore(store.getState())
    }, [renderStore]);

    const onUserChange = () => {
        const anotherUserDataFromServer = getAnotherUserFromServer();

        store.dispatch({
            type: "SET_USER_DATA",
            payload: anotherUserDataFromServer,
        });
        setRenderStore(store.getState())
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
