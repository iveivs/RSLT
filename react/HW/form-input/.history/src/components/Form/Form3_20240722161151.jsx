
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const fieldScheme = yup.object().shape({
    login: yup
        .string()
        .matches(
            /^[\w_]*$/,
            'Неверный логин. Допустимые символы - буквы, цифры и нижние подчёркивания"'
        )
        .max(10, "Неверный логин. Должно быть не больше 10 символов")
        .min(3, "Неверный логин. Должно быть не менее 3 символов"),
    email: yup
    
});

// REACT FORM
function Form3() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
        },
        resolver: yupResolver(fieldScheme),
    });

    const loginError = errors.login?.message;

    const onSubmit = (formData) => {
        console.log("formData from onSubmit", formData);
    };
    return (
        <>
            <h1>Forms 3</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {loginError && <div className="error_label">{loginError}</div>}
                <input name="login" type="text" {...register("login")} />
                <input name="email" type="email" {...register("email")} />
                <button type="submit" disabled={!!loginError}>
                    Отправить
                </button>
            </form>
        </>
    );
}

export default Form3;
