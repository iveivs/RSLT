import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuestion } from '../../selectors/select-current-question';

export const Card = ({ questions }) => {
    const dispatch = useDispatch()
    const currentQuestion = useSelector(selectCurrentQuestion)
    const isLoading = useSelector(selectIsLoading); // Селектор для состояния загрузки
    const hasError = useSelector(selectError);
    console.log('currentQuestion', currentQuestion);
    // console.log('questions from card', questions);
    return (
        <>
            <div className={styles.wrapper}>
                <h2>Title</h2>
                {!isLoading &&
                !hasError &&
                questions &&
                questions.length > 0 }
                
            </div>
        </>
    )
}