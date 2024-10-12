import { styled } from "styled-components";
import { H2, Icon } from "../../components";
import { useDispatch } from "react-redux";
import { ROLE } from "../../constants";
import { UserRow } from "./components";

const UsersContainer = ({ className }) => {
    const dispatch = useDispatch()
    const users = [];

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
                    <UserRow key={id} login={login} registredAt={registredAt} roleId={roleId} />
                ))}
            </div>
        </div>
    );
};

export const Users = styled(UsersContainer)``;
