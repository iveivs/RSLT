import styles from './Button.module.css'
export const Button = ({ buttonName }) => {
    return (
        <>
            <button>
                <div className={styles.btn}></div>
            </button>
        </>
    )
}