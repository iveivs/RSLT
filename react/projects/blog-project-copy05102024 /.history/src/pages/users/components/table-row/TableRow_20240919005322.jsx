import styled from 'styled-components'

const TableRowContainer = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
)

export const TableRow = styled(TableRowContainer)`
    display: flex;
    align-items: center;
    border: ${({border}) => border ? '1px solid #ccc' : 'none;'}
    

    & > div {
        display: flex;
        padding: 0 10px;
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

