import styles from "./Information.module.css";
import { connect } from "react-redux";
import {
    selectCurrentPlayer,
    selectIsDraw,
    selectIsGameEnded,
} from "../../selectors";
import { Component } from "react";

class InformationLayout extends Component {

    
};

const mapStateToProps = (state) => ({
    currentPlayer: selectCurrentPlayer(state),
    isGameEnded: selectIsGameEnded(state),
    isDraw: selectIsDraw(state),
});

export default connect(mapStateToProps)()
