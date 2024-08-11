import { useState, useEffect } from "react";
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

function App() {
    const [userData, setUserData] = useState({});

    const dispatch = (action) => {
        const { type, payload } = action;

        console.log("payload", payload);
        switch (type) {
            case "SET_USER_DATA":
                setUserData(payload);
                break;
            case "SET_USER_DATA":
                setUserData(payload);
                break;

            default:
            // ничего не делать
        }
    };

    useEffect(() => {
        const userDataFromServer = getUserFromServer();

        setUserData(userDataFromServer);
    }, []);

    const onUserChange = () => {
        const anotherUserDataFromServer = getAnotherUserFromServer();

        setUserData(anotherUserDataFromServer);
    };
    // console.log('userData', userData);
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
