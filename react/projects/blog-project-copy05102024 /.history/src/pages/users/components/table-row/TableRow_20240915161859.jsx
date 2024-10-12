import styled from 'styled-components'

const TableRowContainer = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
)

export const TableRow = styled(TableRowContainer)`
    display: flex;
    & .ligin-column {
        width: 170px;
    }
    & .registered-at-column {
        width: 170px;
    }
    & .-at-column {
        width: 170px;
    }
`

