import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuestion, selectIsLoading, selectError  } from '../../selectors';

export const Card = ({ questions }) => {
    const dispatch = useDispatch()
    const currentQuestion = useSelector(selectCurrentQuestion)
    const isLoading = useSelector(selectIsLoading); 
    const hasError = useSelector(selectError);
    console.log('currentQuestion', currentQuestion);
    // console.log('questions from card', questions);
    return (
        <>
            <div className={styles.wrapper}>
                
                {!isLoading &&
                !hasError &&
                questions &&
                questions.length > 0 && (
                    <>
                        <h2><h2>Title</h2></h2>
                    </>
                ) }
                
            </div>
        </>
    )
}