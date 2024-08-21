import { UseSelector } from "react-redux";
imp
import { selectAge, selectName} from '../../selectors'
export const User = () => {
    const name = UseSelector(selectName);
    const age = UseSelector(selectAge);
    return (
        <div>
            <div>Пользователь: {name}</div>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
        </div>
    );
};
