import { connect /* seSelector */} from "react-redux";
import { selectAge, selectName} from '../../selectors'
export const User = () => { //добавляем в пропсы нужное 
    // const name = useSelector(selectName); //это для обычного функционального компонента
    // const age = useSelector(selectAge);
    return (
        <div>
            <div>Пользователь: {name}</div>
            <div>Имя: {name}</div>
            <div>Возраст: {age}</div>
        </div>
    );
};
