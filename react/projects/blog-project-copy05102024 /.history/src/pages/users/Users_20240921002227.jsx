import { H2 , Content} from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { ROLE } from "../../constants";

const UsersContainer = ({ className }) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false)
    console.log('shouldUpdateUserList', shouldUpdateUserList);

    const requestServer = useServerRequest("fetchRoles");

    useEffect(() => {
        console.log('useEffect');
        Promise.all([
            requestServer("fetchUsers"),
            requestServer("fetchRoles"),
        ]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error);
                return;
            }

            setUsers(usersRes.res);
            setRoles(rolesRes.res);
        });
    }, [requestServer, shouldUpdateUserList]);

    const onUserRemove = (userId) => {
        console.log('onUserRemove', userId);
        requestServer('removeUser', userId).then(() => {
            console.log('requestServer then');
            setShouldUpdateUserList(!shouldUpdateUserList)
            // setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // добавленный код (всё равно не с)
        })
    }

    return (
        <div className={className}>
            <Content error={errorMessage}>
                <H2> Пользователи </H2>
                <div>
                    <TableRow>
                        <div className="ligin-column">Логин</div>
                        <div className="registered-at-column">
                            Дата регистрации
                        </div>
                        <div className="role-column">Роль</div>
                    </TableRow>

                    {users.map(({ id, login, registeredAt, roleId }) => (
                        <UserRow
                            key={id}
                            id={id}
                            login={login}
                            registeredAt={registeredAt}
                            roleId={roleId}
                            roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST )}
                            onUserRemove={() => onUserRemove(id)}
                        />
                    ))}
                </div>
            </Content>
        </div>
    );
};

export const Users = styled(UsersContainer)`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    width: 570px;
    font-size: 18px;
`;
