import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';

export const Card = ({ questions }) => {
    console.log('questions from card', questions);
    return (
        <>
            <div className={styles.wrapper}>
                <h2>Title</h2>

                
            </div>
        </>
    )
}