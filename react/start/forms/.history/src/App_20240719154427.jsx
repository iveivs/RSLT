// npm i yup
import { useState, useRef } from "react";
import "./App.css";
import { useForm } from "react-hook-form";


function App() {
    const { register, handleSubmit, formState: {errors}} = useForm({
      defaultValues: {
        login: '',      }
    })

    const loginError = errors.login?.message
    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit(onSub)} >
              {loginError && <div className="error_label">{loginError}</div>}
              <input name="login" type="text" />
              <button type="submit" disabled={loginError !== null}>Отправить</button>
            </form>
        </>
    );
}

export default App;
