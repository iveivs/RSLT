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

    const loginProps = {
      minLength: {value: 3, message: "Неверный логин. Должно быть не менее 3 символов"}, 
      maxLength: {value: 20, message: "Неверный логин. Должно быть не больше 10 символов"}, 
    }

    const onSubmit = (formData) => {
      console.log('formData from onSubmit', formData);
    }
    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
              {loginError && <div className="error_label">{loginError}</div>}
              <input name="login" type="text" />
              <button type="submit" disabled={loginError !== null}>Отправить</button>
            </form>
        </>
    );
}

export default App;