// npm i yup
import { useState, useRef } from "react";
import "./App.css";
import { useForm } from "react-hook-form";


function App() {
    

    return (
        <>
            <h1>Forms</h1>
            <form >
              {loginError && <div className="error_label">{loginError}</div>}
              <input name="login" type="text" />
              <button type="submit" disabled={}>Отправить</button>
            </form>
        </>
    );
}

export default App;
