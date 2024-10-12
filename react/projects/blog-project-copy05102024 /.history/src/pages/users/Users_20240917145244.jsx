import { styled } from "styled-components";
import { H2 } from "../../components";
// import { useDispatch } from "react-redux";
// import { ROLE } from "../../constants";
import { UserRow, TableRow } from "./components";
import { server } from "../../bff";
import { useServer } from "../../hooks";
import { useState, useEffect } from "react";

const UsersContainer = ({ className }) => {
    const [roles, setRoles] = useState([]);
    // const dispatch = useDispatch();
    const requestServer = useServerRequest("fetchRoles");
    const users = [];

    useEffect(() => {
        requestServer("fetchRoles").then(({ error, res }) => {
            if (error) {
                return;
            }
            setRoles(res);
        });
    }, []);

    const errorMessage = rolesError || usersError

    return (
        <div className={className}>
            
            errorMessage 
            ? <>
            </> 
            : <>
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
