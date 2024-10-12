import styled from 'styled-components'

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`

const controlPanelContainer = ({ className }) => {
    return (
        <div className={className}>
            <RightAligned>
                <button>1</button>
            </RightAligned>
            <RightAligned>
                <button>2</button>
            </RightAligned>
        </div>
    )
}

export const ControlPanel = styled(controlPanelContainer)`
`