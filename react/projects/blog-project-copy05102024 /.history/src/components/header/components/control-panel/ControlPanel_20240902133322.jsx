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
                <Icon id="fa-backward" />
                <Icon id="fa-file-text-o" />
                <Icon id="fa-users" margin='' />
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(controlPanelContainer)`
`