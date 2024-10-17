import PropTypes from 'prop-types'
import { H2 } from "../h2/H2";
import { styled } from "styled-components";
import { PROP_TYPE } from '../../constants'

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px;
`

export const Error = ({ error }) => 
    error && (
        <Div>
            <H2> Ошибка </H2>
            <div>{error}</div>
        </Div>
    ) 

Error.propTypes = {
    // error: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)])
    error: PROP_TYPE.ERROR,
}