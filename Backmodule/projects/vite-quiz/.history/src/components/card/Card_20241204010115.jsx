import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCurrentQuestion,
    selectIsLoading,
    selectError,
} from "../../selectors";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Card = ({ questions }) => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectError);

    // Состояние для отслеживания выбранного ответа
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className={styles.wrapper}>
                {!isLoading &&
                    !hasError &&
                    questions &&
                    questions.length > 0 && (
                        <>
                            <h2>{questions[currentQuestion].question}</h2>
                            <form>
                                {questions[currentQuestion].options.map(
                                    (option, index) => (
                                        <div key={index}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="quiz"
                                                    value={option}
                                                    checked={
                                                        selectedOption === option
                                                    }
                                                    onChange={handleOptionChange}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    )
                                )}
                            </form>
                        </>
                    )}
                <div className="btn_slider_box">
                    <Button buttonName="Предыдущий вопрос"></Button>
                    <Button buttonName="Следующий вопрос"></Button>
                </div>
            </div>
        </>
    );
};
