import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { UserBlock } from "./components/user-block/UserBlock";
watch(
  [() => props.property1, () => props.property2],
  async ([property1, property2]) => {
    
  },
  {
    immediate: true,
  }
);


const getUserFromServer = () => ({
    id: "001",
    name: "Eman",
    age: 123,
    phone: 987654321,
    email: "qwe@asd.zxc",
});

function App() {
    const { name, age, id, phone, email } = getUserFromServer();
    return (
        <AppContext.Provider>
            <div>
                <h1>context api</h1>
                <Header currentUser={name} />
                <UserBlock
                    name={name}
                    age={age}
                    id={id} 
                    phone={phone}
                    email={email}
                />
            </div>
        </AppContext.Provider>
    );
}

export default App;
