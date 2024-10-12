import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from '../../bff';
import { useState } from "react";
import { Input, Button } from "../../components"
import { styled } from "styled-components";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
    text-align: 
`

const AuthorizationContainer = ({className}) => {
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
    
    const [serverError, setServerError] = useState()

    
    const onSubmit = ({ login, password}) => {
        server.authorize(login, password).then(({error, res}) => {
            if(error) {
                setServerError(`Ошибка запроса${error}`)
            }
        })
    }
    
    const formError = errors?.login?.message || errors?.password?.message 
    const errorMessage = formError || serverError 

    return (
        <div className={className}>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="Логин..." {...register("login")} />
                <Input type="password" placeholder="Пароль..." {...register("password")} />
                <Button type="submit" disabled={!!formError}>Авторизоваться</Button>
                <Link to='/register'>Регистрация</Link>
                {errorMessage && <div>{errorMessage}</div>}
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
`