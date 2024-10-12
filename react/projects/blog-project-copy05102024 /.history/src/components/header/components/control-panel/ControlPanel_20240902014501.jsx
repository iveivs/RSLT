import styled from 'styled-components'

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`

const controlPanelContainer = ({ className }) => {
    return (
        <div className={className}>
            <RightAligned>
                <button></button>
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(controlPanelContainer)