import styles from './Card.module.css'

export const Card = ({ question }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <h2>{q}</h2>
            </div>
        </>
    )
}