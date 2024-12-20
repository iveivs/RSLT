import { styled } from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { TableRow } from "../table-row/TableRow";
import { useState } from "react";

const UserRowContainer = ({
    className,
    login,
    registeredAt,
    roleId: userRoleId,
    roles,
}) => {
    const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)
    const dispatch = useDispatch();

    const onRoleChange = ({target}) => {
        setSelectedRoleId(Number(target.value))
    };

    const isSaveButtonDisabled = selectedRoleId === userRoleId

    return (
        <div className={className}>
            <TableRow border={true}>
                <div className="ligin-column">{login}</div>
                <div className="registered-column">{registeredAt}</div>
                <div className="role-column">
                    <select value={selectedRoleId} onChange={onRoleChange}>
                        {roles.map(({ id: roleId, name: roleName }) => (
                            <option key={roleId} value={roleId}>{roleName}</option>
                        ))}
                    </select>
                        <Icon
                            id="fa-floppy-o"
                            margin="0 0 0 10px"
                            disabled={isSaveButtonDisabled}
                            onClick={() => dispatch(sUserRole)}
                        />
                    
                </div>
            </TableRow>
            <Icon
                id="fa-trash-o"
                margin="0 0 0 10px"
                onClick={() => dispatch(/* TODO */)}
            />
        </div>
    );
};

export const UserRow = styled(UserRowContainer)`
    display: flex;
    margin-top: 10px;
    & select {
        padding: 0 5px;
        font-size: 16px;
    }

    
`;
