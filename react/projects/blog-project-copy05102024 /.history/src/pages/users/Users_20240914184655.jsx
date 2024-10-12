import { styled } from "styled-components";
import { H2, Icon } from "../../components";
import { UseDispatch } from "react-redux";

const UsersContainer = ({ className }) => {
    const dispatch = useDispatch()
    const users = [];
    return (
        <div className={className}>
            <H2> Пользователи </H2>
            <div>
                <div className="table-header">
                    <div>Логин</div>
                    <div>Дата регистрации</div>
                    <div>Роль</div>
                </div>
                {users.map(({ id, login, registredAt, roleId }) => (
                    <div className="table-row">
                        <div className="user-data"></div>
                        <Icon
                            id="fa-trash-o"
                            margin="0 0 0 10px"
                            onClick={() => dispatch(logout(session))}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Users = styled(UsersContainer)``;
