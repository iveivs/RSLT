import styles from './Information.module.css';
export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
    return (
        // <div className={styles.info_container}>
        //     {isDraw && <p>Ничья</p>}
        //     {!isDraw && isGameEnded && <p className={styles.win}>Победа: {currentPlayer}</p>}
        //     {!isDraw && !isGameEnded && <p className={styles.currentPlayer}>Сейчас ходит: {currentPlayer}</p>}
        // </div>
    );
};