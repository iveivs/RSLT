import { styled } from "styled-components";
import { H2 } from "../../components";
// import { useDispatch } from "react-redux";
// import { ROLE } from "../../constants";
import { UserRow, TableRow } from "./components";
import { server } from "../../bff";
import { useServer } from "../../hooks";
import { useState, useEffect } from "react";


const UsersContainer = ({ className }) => {
    const [roles, setRoles] = useState([])
    // const dispatch = useDispatch();
    const requestServer = useServerRequest('fetchRoles')
    const users = [];

    useEffect(() => {
        requestServer('fetchRoles').then(({ error, res})=> {
            if(error) {
                return
            }
            setRoles(res)
        })
    },[])

    return (
        <div className={className}>
            <>
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
