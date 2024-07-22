// import { useState, useRef } from "react";
// import { useForm } from "react-hook-form";

// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const fieldScheme = yup.object().shape({
//     login: yup
//         .string()
//         .matches(
//             /^[\w_]*$/,
//             "Неверный логин. Допустимые символы - буквы, цифры и нижние подчёркивания"
//         )
//         .max(10, "Неверный логин. Должно быть не больше 10 символов")
//         .min(3, "Неверный логин. Должно быть не менее 3 символов"),
//     email: yup
//         .string()
//         .matches(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//             "Неверный email. Почта должна содержать знак @, и содоержать только латинские буквы"
//         ),
//     password: yup
//         .string()
//         .matches(
//             /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//             "Пароль должен содержать минимум 8 символов, включая буквы и цифры"
//         )
//         .max(10, "Неверный логин. Должно быть не больше 10 символов")
//         .min(3, "Неверный логин. Должно быть не менее 3 символов")
// });

// // REACT FORM
// function Form3() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({
//         defaultValues: {
//             login: "",
//             email: "",
//         },
//         resolver: yupResolver(fieldScheme),
//     });

//     const loginError = errors.login?.message;
//     const emailError = errors.email?.message;

//     const onSubmit = (formData) => {
//         console.log("formData from onSubmit", formData);
//     };
//     return (
//         <>
//             <h1>Forms 3</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 {loginError && <div className="error_label">{loginError}</div>}
//                 {emailError && <div className="error_label">{emailError}</div>}
//                 <input name="login" type="text" {...register("login")} />
//                 <input
//                     placeholder="email"
//                     name="email"
//                     type="email"
//                     {...register("email")}
//                 />
//                 <input
//                     placeholder="password"
//                     name="password"
//                     type="password"
//                     {...register("password")}
//                 />
//                 <input
//                     placeholder="confirm password"
//                     name="confirm"
//                     type="password"
//                     {...register("confirm")}
//                 />
//                 <button type="submit" disabled={!!loginError}>
//                     Отправить
//                 </button>
//             </form>
//         </>
//     );
// }

// export default Form3;

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const fieldScheme = yup.object().shape({
    email: yup
        .string()
        .email("Неверный формат почты")
        .required("Почта обязательна"),
    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            "Пароль должен содержать минимум 6 символов, включая буквы и цифры"
        )
        .required("Пароль обязателен"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
        .required("Подтверждение пароля обязательно"),
});

function Form3() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(fieldScheme),
    });

    const onSubmit = (formData) => {
        console.log("formData", formData);
    };

    return (
        <>
            <h1>Forms 3</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                {errors.email && (
                    <div className="error_label">{errors.email.message}</div>
                )}
                <input
                    name="email"
                    type="text"
                    {...register("email")}
                    placeholder="Почта"
                />

                {errors.password && (
                    <div className="error_label">{errors.password.message}</div>
                )}
                <input
                    name="password"
                    type="password"
                    {...register("password")}
                    placeholder="Пароль"
                />

                {errors.confirmPassword && (
                    <div className="error_label">
                        {errors.confirmPassword.message}
                    </div>
                )}
                <input
                    name="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="Подтверждение пароля"
                />

                <button type="submit">Отправить</button>
                <button type="button" onClick={() => reset()}>
                    Очистить
                </button>
            </form>
        </>
    );
}

export default Form3;

