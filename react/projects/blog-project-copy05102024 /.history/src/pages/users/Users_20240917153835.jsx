import { H2 } from "../../components";
import { Content , UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

const UsersContainer = ({ className }) => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const requestServer = useServerRequest("fetchRoles");

    useEffect(() => {
        Promise.all([
            requestServer("fetchUsers"),
            requestServer("fetchRoles"),
        ]).then(([usersRes, rolesRes]) => {
            if (usersRes.error || rolesRes.error) {
                setErrorMessage(usersRes.error || rolesRes.error);
                return;
            }

            setUsers(usersRes);
            setRoles(rolesRes);
        });
        requestServer("fetchRoles").then(({ rolesError, res }) => {
            if (rolesError) {
                return;
            }
            setRoles(res);
        });

        requestServer("fetchUsers");
    }, []);

    return (
        <div className={className}>
            errorMessage ? ({" "}
            <>
                <H2> Ошибка </H2>
                <div>{errorMessage}</div>
            </>
            ) : ({" "}
            <>
                <H2> Пользователи </H2>
                <div>
                    <TableRow>
                        <div className="ligin-column">Логин</div>
                        <div className="registered-at-column">
                            Дата регистрации
                        </div>
                        <div className="role-column">Роль</div>
                    </TableRow>

                    {users.map(({ id, login, registredAt, roleId }) => (
                        <UserRow
                            key={id}
                            login={login}
                            registredAt={registredAt}
                            roleId={roleId}
                            roles={roles}
                        />
                    ))}
                </div>
            </>
            )
        </div>
    );
};

export const Users = styled(UsersContainer)`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    width: 570px;
`;