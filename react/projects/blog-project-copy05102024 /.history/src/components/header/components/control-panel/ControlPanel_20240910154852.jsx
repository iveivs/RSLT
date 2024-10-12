import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../../../selectors";
import { Icon, Button } from "../../../../components";
import styled from "styled-components";
import { ROLE } from "../../../../constants";

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
    const roleId = useSelector(selectUserRole)
    const login = useSelector(selectUserLogin)
    return (
        <div className={className}>
            <RightAligned>
                <Button>
                    {/* <StyledLink to="login">Войти</StyledLink> */}
                    (roleId === ROLE.GUEST ? <Link to="login">Войти</Link> : <>
                    
                    </>)
                </Button>
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
