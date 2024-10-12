import styled from 'styled-components'
const IconContainer = ({ className, id }) => (
    <div className={className}>
        <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
);

const Icon = styled(IconContainer)`
    font-size: 70px;
    margin-right: 10px;
`