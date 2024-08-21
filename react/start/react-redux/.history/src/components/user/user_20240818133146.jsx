import { UseSelector } from "react-redux";
export const User = () => {
    const name = UseSelector((state) => state.user.name);
    const age = UseSelector((state) => state.user.name);
    return (
        <div>
            <div>Пользователь: {name}</div>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
        </div>
    );
};
