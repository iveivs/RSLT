import styled from 'styled-components'

const TableRowContainer = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
)

export const TableRow = styled(TableRowContainer)`
    display: flex;

    & > div {
        padding: 
    }

    & .ligin-column {
        width: 170px;
    }
    & .registered-at-column {
        width: 213px;
    }
    & .role-column {
        width: auto;
    }
`

