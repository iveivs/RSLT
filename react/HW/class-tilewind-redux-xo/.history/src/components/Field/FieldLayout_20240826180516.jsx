import styles from "./Field.module.css";
import { RESTART_GAME } from "../../actions";
import { connect } from "react-redux"
import { Component } from "react";

class FieldLayout extends Component {
    // const dispatch = useDispatch()
    // const restartGame = () => {
    //     dispatch(RESTART_GAME)
    // }
    render
};

const mapDispatchToProps = (dispatch) => ({
    RESTART_GAME: () => dispatch(RESTART_GAME)
});

export connect(null, mapDispatchToProps)(FieldLayout)
