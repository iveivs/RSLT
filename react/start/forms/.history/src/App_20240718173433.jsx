import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <h1>Forms</h1>
            <form>
              <input type="text" name='login' value={login} placeholder='Логин' onChange={}/>
            </form>
        </>
    );
}

export default App;
