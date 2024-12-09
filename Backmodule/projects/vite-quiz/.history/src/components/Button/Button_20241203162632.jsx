import styles from "./Button.module.css";
export const Button = ({ buttonName }) => {
    return (
        <>
            {/* <div className={styles.btn_name}>{buttonName}</div> */}
            <button className={styles.btn_name}>{buttonName}</button>
        </>
    );
};
