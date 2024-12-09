import styles from "./Button.module.css";

export const Button = ({ buttonName, isDisabled, onCli }) => {
    return (
        <>
            <button 
                disabled={isDisabled} 
                className={styles.btn_name}
            >
                {buttonName}
            </button>
        </>
    );
};
