import { styled } from "styled-components";

const UserRowContainer = ({ className, id, login, }) => {
    const onRoleChange = () => {

    }

    return (
        <div className="table-row" key={userId}>
            <div className="user-data">
                <div className="ligin-column">{login}</div>
                <div className="registered-column">{registredAt}</div>
                <div className="role-column">
                    <select value={userRoleId} onChange={onRoleChange}>
                        {roles.map(({id: roleId, name: roleName}) => (
                            <option value={roleId}>{roleName}</option>
                        ))}
                    </select>
                    <Icon
                        id="fa-floppy-o"
                        margin="0 0 0 10px"
                        onClick={() => dispatch(/* TODO */)}
                    />
                </div>
                
            </div>
            <Icon
                id="fa-trash-o"
                margin="0 0 0 10px"
                onClick={() => dispatch(/* TODO */)}
            />
        </div>
    )
}

export const UserRow = styled(UserRowContainer)`

`