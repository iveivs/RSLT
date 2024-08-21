import { UseSelector } from "react-redux";
import { selectAge, selectName} from './../../selectors'
export const User = () => {
    const name = UseSelector(selectAge);
    const age = UseSelector((state) => state.user.age);
    return (
        <div>
            <div>Пользователь: {name}</div>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
        </div>
    );
};
