// import styles from "./Field.module.css";
// import { RESTART_GAME } from "../../actions";
// import { connect } from "react-redux"
// import { Component } from "react";

// class FieldLayout extends Component {
//     constructor(props) {
//         super(props);
//         this.restartGame = this.restartGame.bind(this);
//     }
//     restartGame = () => {
//         this.props.RESTART_GAME()
//     }
//     render() {
//         const { field, handleClick } = this.props;
//         return (
//             <>
//                 <div className={styles.container}>
//                     {field.map((elem, i) => (
//                         <div
//                             onClick={() => handleClick(i)}
//                             key={i}
//                             className={`${styles.fieldItem} ${
//                                 styles.fieldItem + (i + 1)
//                             }`}
//                         >
//                             {elem}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="cover_btn">
//                     <button onClick={this.restartGame} className={styles.restartGameBtn}>
//                         Начать заново
//                     </button>
//                 </div>
//             </>
//         );
//     }
// };

// const mapDispatchToProps = (dispatch) => ({
//     RESTART_GAME: () => dispatch(RESTART_GAME)
// });

// export default connect(null, mapDispatchToProps)(FieldLayout)
import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Field.module.css";
import { RESTART_GAME } from "../../actions";

class FieldLayout extends Component {
    constructor(props) {
        super(props);
        // Привязываем метод к контексту класса
        this.restartGame = this.restartGame.bind(this);
    }

    // Метод для перезапуска игры
    restartGame() {
        this.props.RESTART_GAME(); // Вызов экшена через props
    }

    render() {
        const { field, handleClick } = this.props;

        return (
            <>
                <div className={styles.container}>
                    {field.map((elem, i) => (
                        <div
                            onClick={() => handleClick(i)}
                            key={i}
                            className={`${styles.fieldItem} ${
                                styles.fieldItem + (i + 1)
                            }`}
                        >
                            {elem}
                        </div>
                    ))}
                </div>
                <div className="cover_btn">
                    <button
                        onClick={this.restartGame}
                        className={styles.restartGameBtn}
                    >
                        Начать заново
                    </button>
                </div>
            </>
        );
    }
}

// Функция для связывания действия с компонентом через dispatch
const mapDispatchToProps = (dispatch) => ({
    RESTART_GAME: () => dispatch(RESTART_GAME),
});

// Подключение компонента к Redux с использованием connect()
export default connect(null, mapDispatchToProps)(FieldLayout);

