import { UseSelector } from "react-redux";
export const User = () => {
    const name = UseSelector((state) => );
    const age = 123;
    return (
        <div>
            <div>Пользователь: {name}</div>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
        </div>
    );
};