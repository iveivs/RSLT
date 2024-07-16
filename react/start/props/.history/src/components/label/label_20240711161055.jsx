import styles from './label.module.css'

export const Label = ({ color, ch}) => {
    return <label className={`${styles.label} ${styles[color]}`}>{title}:</label>
}