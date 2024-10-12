import { Icon } from '../../../../components'
import styled from 'styled-components'

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Button = styled.button`
    font-size: 18px;
    width: 100px;
    hight: 32px;
`

const controlPanelContainer = ({ className }) => {
    return (
        <div className={className}>
            <RightAligned>
                <button>Войти</button>
            </RightAligned>
            <RightAligned>
                <Icon id="fa-backward" margin='10px 0 0     0 ' />
                <Icon id="fa-file-text-o"  margin='10px 0 0 16px '/>
                <Icon id="fa-users" margin='10px 0 0 16px ' />
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(controlPanelContainer)`
`