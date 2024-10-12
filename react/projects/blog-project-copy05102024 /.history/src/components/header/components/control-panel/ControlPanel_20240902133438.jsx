import { Icon } from '../../../../components'
import styled from 'styled-components'

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`

const controlPanelContainer = ({ className }) => {
    return (
        <div className={className}>
            <RightAligned>
                <button>Войти</button>
            </RightAligned>
            <RightAligned>
                <Icon id="fa-backward" margin='5px 5px 0 0 ' />
                <Icon id="fa-file-text-o" margin='5px 5px 0 0 '/>
                <Icon id="fa-users" margin='10px 0 0 10px ' />
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(controlPanelContainer)`
`