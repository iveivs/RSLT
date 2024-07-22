
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const fieldScheme = yup.object().shape({
    login: yup
        .string()
        .matches(
            /^[\w_]*$/,
            'Неверный логин. Допустимые символы - буквы, цифры и нижние подчёркивания'
        )
        .max(10, "Неверный логин. Должно быть не больше 10 символов")
        .min(3, "Неверный логин. Должно быть не менее 3 символов"),
    email: yup
    .string()
    .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Неверный email. Почта должна содержать знак @, и содоержать латинские буквы'),
    password: yup
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
            email: "",
        },
        resolver: yupResolver(fieldScheme),
    });

    const loginError = errors.login?.message;
    const emailError = errors.email?.message;

    const onSubmit = (formData) => {
        console.log("formData from onSubmit", formData);
    };
    return (
        <>
            <h1>Forms 3</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {loginError && <div className="error_label">{loginError}</div>}
                {emailError && <div className="error_label">{emailError}</div>}
                <input  name="login" type="text" {...register("login")} />
                <input placeholder="email" name="email" type="email" {...register("email")} />
                <input placeholder="password" name="password" type="password" {...register("password")} />
                <input placeholder="confirm password" name="confirm" type="password" {...register("confirm")} />
                <button type="submit" disabled={!!loginError}>
                    Отправить
                </button>
            </form>
        </>
    );
}

export default Form3;
