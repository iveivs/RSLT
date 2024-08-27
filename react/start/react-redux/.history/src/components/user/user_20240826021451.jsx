import { /* seSelector */} from "react-redux";
import { selectAge, selectName} from '../../selectors'
export const User = () => {
    const name = useSelector(selectName);
    const age = useSelector(selectAge);
    return (
        <div>
            <div>Пользователь: {name}</div>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
        </div>
    );
};
