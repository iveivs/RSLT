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
        formState: { errors, isValid },
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

                <button type="submit" disabled={!isValid}>Отправить</button>
                <button type="button" onClick={() => reset()}>
                    Очистить
                </button>
            </form>
        </>
    );
}

export default Form3;

