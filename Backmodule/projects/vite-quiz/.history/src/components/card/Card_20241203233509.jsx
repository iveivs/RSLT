import styles from './Card.module.css'

export const Card = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h2>{question.question}</h2>
            </div>
        </>
    )
}