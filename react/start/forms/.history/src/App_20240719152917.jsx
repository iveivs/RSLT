// npm i yup
import { useState, useRef } from "react";
import "./App.css";
import { useForm } from "react-hook-form";


function App() {
    

    return (
        <>
            <h1>Forms</h1>
            <form >
              {loginError && <div>{</div>}
              <input type="text" />
              <button>Отправить</button>
            </form>
        </>
    );
}

export default App;
