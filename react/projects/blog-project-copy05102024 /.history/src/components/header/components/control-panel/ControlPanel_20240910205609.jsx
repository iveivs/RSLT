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
`;

// const StyledLink = styled(Link)`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 18px;
//     width: 100px;
//     hight: 32px;
//     border: 1px solid #fff;
//     border-radius: 10px 10px;
//     padding: 6px 0;
//     background-image: linear-gradient(to bottom right, #5761b2, #1fc5a8);
//     color: #fff;
// `;

const StyledIcon = styled.div`
    cursor: pointer;
    &:hover {
        filter: brightness(120%);
    }
`;

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

                    </Button>
                    
                ) : (
                    <>
                        <div>{login}</div>
                        <StyledIcon onClick={() => dispatch(logout(session))}>
                            <Icon id="fa-sign-out" margin="10px 0 0 0" />
                        </StyledIcon>
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
