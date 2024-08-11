import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { UserBlock } from "./components/user-block/UserBlock";

const getUserFromServer = () => ({
  id: '001',
  name: 'Eman',
  age: 123
})

function App() {
  const { name, age, id } = getUserFromServer()
    return (
        <>
            <h1>context api</h1>

            <Header name={name}  />
            <UserBlock name={name} age={age} id= />
        </>
    );
}

export default App;