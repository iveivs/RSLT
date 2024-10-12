import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { server } from '../../bff';

const aurhFormSchema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин")
        .matches(/^\w+$/, "Неверный логин. Допускаются только буквы и цифры")
        .min(3, "Неверно заполнен логин. Минимум три символа")
        .min(15, "Неверно заполнен логин. Максимум 15 символов"),
    password: yup
        .string()
        .required("Заполните пароль")
        .matches(
            /^[\w#%]+$/,
            "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %"
        )
        .min(6, "Неверно заполнен пароль. Минимум 6 символов")
        .min(15, "Неверно заполнен пароль. Максимум 15 символов"),
});

export const Authorization = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            password: "",
        },
        resolver: yupResolver(aurhFormSchema),
    });

    const onSubmit = ({ login, password}) => {
        server.authorize(login, password)
    }

    return (
        <div>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Логин..." {...register("login")} />
                <input type="password" placeholder="Пароль..." {...register("password")} />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};
