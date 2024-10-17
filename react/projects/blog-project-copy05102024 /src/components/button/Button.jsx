import PropTypes from 'prop-types'
import { string } from 'prop-types';
import { styled } from "styled-components";
const buttonContainer = ({ children, className, width, ...props}) => {
    return <button className={className} {...props} >{children}</button>
}

export const Button = styled(buttonContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: ${({ width ='100%' }) => width};
    height: 32px;
    border: 1px solid rgb(0, 0, 0);
    cursor: pointer;
    background-image: linear-gradient(to bottom right, #FDABDD, #374A5A);
    color: #FFF;

    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')} ; 
    }
`  

Button.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string,

}