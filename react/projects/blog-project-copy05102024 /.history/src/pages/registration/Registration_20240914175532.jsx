import { useForm } from "react-hook-form";
import { useDispatch, useStore, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useState } from "react";
import { Input, Button, H2, AuthFormError } from "../../components";
import {} from ''
import { styled } from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { setUser } from "../../actions";
import { useEffect } from "react";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constants";

const regFormSchema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин")
        .matches(/^\w+$/, "Неверный логин. Допускаются только буквы и цифры")
        .min(3, "Неверно заполнен логин. Минимум три символа")
        .max(15, "Неверно заполнен логин. Максимум 15 символов"),
    password: yup
        .string()
        .required("Заполните пароль")
        .matches(
            /^[\w#%]+$/,
            "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %"
        )
        .min(6, "Неверно заполнен пароль. Минимум 6 символов")
        .max(15, "Неверно заполнен пароль. Максимум 15 символов"),
    passcheck: yup
    .string()
    .required("Заполните повтор пароля вероно")
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
});

const RegistrationContainer = ({ className }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            password: "",
            passcheck: "",
        },
        resolver: yupResolver(regFormSchema),
    });

    const [serverError, setServerError] = useState(null);
    const dispatch = useDispatch();

    const store = useStore()

    const roleId = useSelector(selectUserRole)

    useEffect(() => {
        let currentWasLogout = store.getState().app.wasLogout
        const unsubscribe = store.subscribe(() => {
            let prewWasLogout = currentWasLogout
            currentWasLogout = store.getState().app.wasLogout

            if(currentWasLogout !== prewWasLogout) {
                reset()
            }
        })
        return unsubscribe
    }, [reset, store])

    const onSubmit = ({ login, password }) => {

        server.register(login, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка запроса ${error}`);
                return;
            }

            dispatch(setUser(res));
        });
    };

    
    const formError = errors?.login?.message || errors?.password?.message || errors?.passcheck?.message
    const errorMessage = formError || serverError;

    if(roleId !== ROLE.GUEST) {
        return <Navigate to="/" />
    }

    return (
        <div className={className}>
            <H2>Регистрация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="Логин..."
                    {...register("login", {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    type="password"
                    placeholder="Пароль..."
                    {...register("passcheck", {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    type="password"
                    placeholder="Подтвердите пароль..."
                    {...register("password", {
                        onChange: () => setServerError(null),
                    })}
                />
                <Button type="submit" disabled={!!formError}>
                    Зарегестрироваться
                </Button>
                {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
            </form>
        </div>
    );
};

export const Registration = styled(RegistrationContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > form {
        display: flex;
        flex-direction: column;
        width: 260px;
    }
`;
