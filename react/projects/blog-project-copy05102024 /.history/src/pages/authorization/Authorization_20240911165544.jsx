import { useForm } from "react-hook-form";
import { useDispatch, useStore } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { useState } from "react";
import { Input, Button, H2 } from "../../components";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { setUser } from "../../actions";
import { useEffect } from "react";

const aurhFormSchema = yup.object().shape({
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
});

const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: underline;
    margin: 20px 0;
    font-size: 18px;
`;

const ErrorMesage = styled.div`
    margin: 10px 0 0;
    padding: 10px;
    background-color: #fcadad;
    font-size: 18px;
`;

const AuthorizationContainer = ({ className }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            password: "",
        },
        resolver: yupResolver(aurhFormSchema),
    });

    const [serverError, setServerError] = useState(null);
    const dispatch = useDispatch();

    const store = useStore()
    useEffect(() => {
        let prewWasLogout = store.getState().app.wasLogout
        const unsubscribe = store.subscribe(() => {
            prewWasLogout = currentWasLogout
        })
    }, [])

    const onSubmit = ({ login, password }) => {

        server.authorize(login, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка запроса${error}`);
                return;
            }

            dispatch(setUser(res));
        });
    };

    
    const formError = errors?.login?.message || errors?.password?.message;
    const errorMessage = formError || serverError;

    return (
        <div className={className}>
            <H2>Авторизация</H2>
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
                    {...register("password", {
                        onChange: () => setServerError(null),
                    })}
                />
                <Button type="submit" disabled={!!formError}>
                    Авторизоваться
                </Button>
                {errorMessage && <ErrorMesage>{errorMessage}</ErrorMesage>}
                <StyledLink to="/register">Регистрация</StyledLink>
            </form>
        </div>
    );
};

export const Authorization = styled(AuthorizationContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > form {
        display: flex;
        flex-direction: column;
        width: 260px;
    }
`;
