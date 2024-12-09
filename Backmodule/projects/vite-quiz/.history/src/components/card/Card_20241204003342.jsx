import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuestion } from '../../selectors/select-current-question';

export const Card = ({ questions }) => {
    const dispatch = useDispatch()
    const currentQuestion = useSelector(selectCurrentQuestion)
    console.log('questions from card', questions);
    return (
        <>
            <div className={styles.wrapper}>
                <h2>Title</h2>

                
            </div>
        </>
    )
}