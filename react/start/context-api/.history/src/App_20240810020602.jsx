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

function App() {
  const [userData, setUserData ] = useState(null)

  useEffect(() => {
    const userDataFromServer = getUserFromServer();

    setUserData(userDataFromServer)
  })
    return (
        <AppContext.Provider value={userData}>
            <div>
                <h1>context api</h1>
                <Header />
                <UserBlock />
                <button>Сменить пользователя</button>
            </div>
        </AppContext.Provider>
    );
}

export default App;
