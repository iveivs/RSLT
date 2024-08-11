import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { UserBlock } from "./components/UserBlock";

const getUserFromServer = () => ({
  id: '001',
  name: 'Eman',
  age: 123
})

function App() {
  
    return (
        <>
            <h1>context api</h1>

            <Header  />
            <UserBlock  />
        </>
    );
}

export default App;