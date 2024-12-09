import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import 

export const Card = ({ questions }) => {
    const dispatch = useDispatch()
    const currentQuestion = useSelector()
    console.log('questions from card', questions);
    return (
        <>
            <div className={styles.wrapper}>
                <h2>Title</h2>

                
            </div>
        </>
    )
}