import styled from "styled-components";
import { Icon } from "";

const LargeText = styled.div`
    font-size: 48px;
    font-weight: 600;
    margin-top: 10px;
`;
const SmallText = styled.div`
    font-size: 18px;
    font-weight: bold;
`;
const IconContainer = ({ className }) => (
    <div className={className}>
        <i className="fa fa-code" aria-hidden="true"></i>
    </div>
);

const Icon = styled(IconContainer)`
    font-size: 70px;
    margin-right: 10px;
`

const LogoContainer = ({ className }) => (
    <div className={className}>
        <Icon  />
        <div>
            <LargeText>Блог</LargeText>
            <SmallText>Веб-разработчика</SmallText>
        </div>
    </div>
);

export const Logo = styled(LogoContainer)`
    display: flex;
    align-items: center;
`