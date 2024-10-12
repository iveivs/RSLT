import styled from 'styled-components'

const TableRowContainer = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
)

export const TableRow = styled(TableRowContainer)`
    display: flex;
    align-items: center;

    & > div {
        display: flex;
        padding: 0 10px;
        ${}
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

