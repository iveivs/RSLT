const IconContainer = ({ className }) => (
    <div className={className}>
        <i className="fa fa-code" aria-hidden="true"></i>
    </div>
);

const Icon = styled(IconContainer)`
    font-size: 70px;
    margin-right: 10px;
`