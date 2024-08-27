
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RESTART_GAME } from '../../actions';

class FieldLayout extends Component {
    constructor(props) {
        super(props);
        this.restartGame = this.restartGame.bind(this);
    }

    restartGame() {
        this.props.RESTART_GAME(); 
    }

    render() {
        const { field, handleClick } = this.props;

        return (
            <>
                <div className="mx-auto h-[300px] w-[300px] flex flex-wrap">
                    {field.map((elem, i) => (
                        <div
                            onClick={() => handleClick(i)}
                            key={i}
                            className="h-[98px] w-[98px] bg-gray-800 hover:bg-gray-600 cursor-pointer border border-red-500 text-center text-2xl flex justify-center items-center"
                        >
                            {elem}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={this.restartGame}
                        className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
                    >
                        Начать заново
                    </button>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    RESTART_GAME: () => dispatch(RESTART_GAME()), 
});

export default connect(null, mapDispatchToProps)(FieldLayout);
