import { H2, PrivateContent } from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { checkAccess } from "../../utils/check-access";
import { ROLE } from "../../constants";

const UsersContainer = ({ className }) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
    const userRole = useSelector(selectUserRole);

    const requestServer = useServerRequest("fetchRoles");

    useEffect(() => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }
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
    }, [requestServer, shouldUpdateUserList, userRole]);

    const onUserRemove = (userId) => {
        if (!checkAccess([ROLE.ADMIN], userRole)) {
            return;
        }
        console.log("onUserRemove", userId);
        requestServer("removeUser", userId).then(() => {
            console.log("requestServer then");
            setShouldUpdateUserList(!shouldUpdateUserList);
            // setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // добавленный код (всё равно не сработал)
        });
    };

    return (
        <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
            <div className={className}>
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
                            roles={roles.filter(
                                ({ id: roleId }) => roleId !== ROLE.GUEST
                            )}
                            onUserRemove={() => onUserRemove(id)}
                        />
                    ))}
                </div>
            </div>
        </PrivateContent>
    );
};

export const Users = styled(UsersContainer)`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    width: 570px;
`;
