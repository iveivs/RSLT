import { styled } from "styled-components";
import { H2, Icon } from "../../components";
import { useDispatch } from "react-redux";
import { ROLE } from "../../constants";

const UsersContainer = ({ className }) => {
    const dispatch = useDispatch()
    const users = [];
    const roles = []
    return (
        <div className={className}>
            <H2> Пользователи </H2>
            <div>
                <div className="table-header">
                    <div className="ligin-column">Логин</div>
                    <div className="registered-column" >Дата регистрации</div>
                    <div className="role-column" >Роль</div>
                </div>
                {users.map(({ id: userId, login, registredAt, roleId: userRoleId }) => (
                    <div className="table-row" key={userId}>
                        <div className="user-data">
                            <div className="ligin-column">{login}</div>
                            <div className="registered-column">{registredAt}</div>
                            {/* <div className="role-column">{ROLE[roleId]}</div> */}
                            <select value={userRoleId}>
                                {roles.map(() =>)}
                            </select>
                        </div>
                        <Icon
                            id="fa-trash-o"
                            margin="0 0 0 10px"
                            onClick={() => dispatch(/* TODO */)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Users = styled(UsersContainer)``;
