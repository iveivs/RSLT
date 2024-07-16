import styles from './label.module.css'

export const Label = ({title, color}) => {
    return <label className={`${styles.userLabel} ${styles[color]}`}>{title}</label>
}