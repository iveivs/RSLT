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
            <Content>

            </Content>
            errorMessage ? ({" "}
            ) : ({" "}
            <>
                
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
