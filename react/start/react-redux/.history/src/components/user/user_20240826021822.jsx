import { connect /* seSelector */} from "react-redux";
import { selectAge, selectName} from '../../selectors'
// export const User = () => { // /это для обычного функционального компонента
export const User = ( {name, age }) => { //добавляем в пропсы то что нужно взять из стора и переименовываем компонент

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

export const User = connect(mapStateToProps)