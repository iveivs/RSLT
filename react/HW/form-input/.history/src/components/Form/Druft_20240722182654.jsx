import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


function Druft() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        defaultValues: {
            login: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(fieldScheme),
        mode: "onChange", // This enables re-validation on every change
    });

    const onSubmit = (formData) => {
        console.log("formData from onSubmit", formData);
    };

    return (
        <>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.login && (
                    <div className="error_label">{errors.login.message}</div>
                )}
                <input
                    name="login"
                    type="text"
                    {...register("login")}
                    placeholder="Логин"
                />

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

                <button type="submit" disabled={!isValid}>
                    Отправить
                </button>
                <button type="button" onClick={() => reset()}>
                    Очистить
                </button>
            </form>
        </>
    );
}

export default Druft;
