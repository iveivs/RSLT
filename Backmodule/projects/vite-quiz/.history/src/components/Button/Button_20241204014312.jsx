import styles from "./Button.module.css";
export const Button = ({ buttonName, disabled }) => {
    
    return (
        <>
            <button className={styles.btn_name}>{buttonName}</button>
        </>
    );
};
