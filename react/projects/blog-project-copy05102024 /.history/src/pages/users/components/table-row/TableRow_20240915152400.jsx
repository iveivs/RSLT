import styled from 'styled-components'

const TableRowContainer = ({ className, children }) => (
    <div className=>
        {children}
    </div>
)

export const TableRow = styled(TableRowContainer)`
    display: flex;
    justify-content: space-between;
`

