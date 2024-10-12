import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../../../../components'
import styled from 'styled-components'

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 100px;
    hight: 32px;
    border: 1px solid #222;
    background-color: #ccc;
    padding: 6px 0;
`

const StyledButton = styled.div`
    cursor: pointer;
    
`

const controlPanelContainer = ({ className }) => {
    const navigate = useNavigate()
    return (
        <div className={className}>
            <RightAligned>
                <StyledLink to="login">Войти</StyledLink>
            </RightAligned>
            <RightAligned>
                <StyledButton onClick={() => navigate(-1)}>
                    <Icon id="fa-backward" margin='10px 0 0 0' />
                </StyledButton>
                <Link to="/post"><Icon id="fa-file-text-o"  margin='10px 0 0 16px'/></Link>
                <Link to="/users"><Icon id="fa-users" margin='10px 0 0 16px' /></Link>
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(controlPanelContainer)`
`