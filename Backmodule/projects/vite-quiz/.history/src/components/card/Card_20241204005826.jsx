import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuestion, selectIsLoading, selectError } from '../../selectors';
import { Button } from '../Button/Button';

export const Card = ({ questions }) => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectError);

    return (
        <>
            <div className={styles.wrapper}>
                {!isLoading &&
                    !hasError &&
                    questions &&
                    questions.length > 0 && (
                        <>
                            <h2>{questions[currentQuestion].question}</h2>
                            <ul>
                                {questions[currentQuestion].options.map((option, index) => (
                                    
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    .btn
            </div>
        </>
    );
};
