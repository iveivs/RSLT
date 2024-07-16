import styles from './label.module.css'

export const Label = ({ color}) => {
    return <label className={`${styles.label} ${styles[color]}`}>{title}:</label>
}