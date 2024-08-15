import styles from "./Information.module.css";
export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
    
    return (
        //  Этот закомментированный вариант как-будто выглядит более понятно
        // <div className={styles.info_container}>
        //     {isDraw && <p>Ничья</p>}
        //     {!isDraw && isGameEnded && <p className={styles.win}>Победа: {currentPlayer}</p>}
        //     {!isDraw && !isGameEnded && <p className={styles.currentPlayer}>Сейчас ходит: {currentPlayer}</p>}
        // </div>
        
        <div className={styles.info_container}> 
            {isDraw ? (
                <p>Ничья</p>
            ) : isGameEnded ? (
                <p className={styles.win}>Победа: {currentPlayer}</p>
            ) : (
                <p className={styles.currentPlayer}>
                    Сейчас ходит: {currentPlayer}
                </p>
            )}
        </div>
    );
};
