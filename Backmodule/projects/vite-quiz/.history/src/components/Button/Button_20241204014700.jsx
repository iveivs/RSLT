import styles from "./Button.module.css";
export const Button = ({ buttonName, isDisabled }) => {
    
    return (
        <>
            <button isDisabled ? className={styles.btn_name}>{buttonName}</button>
        </>
    );
};
