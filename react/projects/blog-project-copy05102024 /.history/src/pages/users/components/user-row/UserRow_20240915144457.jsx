import { styled } from "styled-components";
import { Icon } from "../../components";
import { useDispatch } from "react-redux";
import { ROLE } from "../../constants";

const UserRowContainer = ({ className, login, registredAt, roleId: userRoleId}) => {
    const roles = []
    const dispatch = useDispatch()

    const onRoleChange = () => {

    }

    return (
        <div className={className} >
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