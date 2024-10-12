import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    selectUserRole,
    selectUserLogin,
    selectUserSession,
} from "../../../../selectors";
import { Icon, Button } from "../../../../components";
import styled from "styled-components";
import { ROLE } from "../../../../constants";
import { logout } from "../../../../actions";

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;

const StyledIcon = styled.div`
    cursor: pointer;
    &:hover {
        filter: brightness(120%);
    }
`;
const StyledIcon = styled.div`
    cursor: pointer;
    &:hover {
        filter: brightness(120%);
    }
`;

const UserName = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #222;
`

const controlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const session = useSelector(selectUserSession);
    const roleId = useSelector(selectUserRole);
    const login = useSelector(selectUserLogin);

    return (
        <div className={className}>
            <RightAligned>
                {roleId === ROLE.GUEST ? (
                    <Button>
                        <Link to="login">Войти</Link>
                    </Button>
                ) : (
                    <>
                        <UserName>{login}</UserName>
                        <StyledBackIcon onClick={() => dispatch(logout(session))}>
                            <Icon id="fa-sign-out" margin="10px 0 0 0" />
                        </StyledBackIcon>
                    </>
                )}
                
            </RightAligned>
            <RightAligned>
                <StyledIcon onClick={() => navigate(-1)}>
                    <Icon id="fa-backward" margin="10px 0 0 0" />
                </StyledIcon>
                <Link to="/post">
                    <Icon id="fa-file-text-o" margin="10px 0 0 16px" />
                </Link>
                <Link to="/users">
                    <Icon id="fa-users" margin="10px 0 0 16px" />
                </Link>
            </RightAligned>
        </div>
    );
};

export const ControlPanel = styled(controlPanelContainer)``;
