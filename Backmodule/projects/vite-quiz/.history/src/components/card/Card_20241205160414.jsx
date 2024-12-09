import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCurrentQuestion,
    selectIsLoading,
    selectError,
} from "../../selectors";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ questions }) => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectError);
    // const isChecked =

    const [selectedOption, setSelectedOption] = useState(null);
    console.log("selectedOption", selectedOption);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            {!isLoading && !hasError && questions && questions.length > 0 && (
                <>
                    <h2 className={styles.question}>
                        {questions[currentQuestion].question}
                    </h2>
                    <form className={styles.form}>
                        <div className={styles.optionsContainer}>
                            {questions[currentQuestion].options.map(
                                (option, index) => (
                                    <label
                                        key={index}
                                        className={styles.option}
                                    >
                                        <input
                                            type="radio"
                                            name="quiz"
                                            value={option}
                                            checked={selectedOption === option}
                                            onChange={handleOptionChange}
                                        />
                                        {option}
                                    </label>
                                )
                            )}
                        </div>
                    </form>
                </>
            )}
            <div className={styles.btn_slider_box}>
                <Button
                    isDisabled={currentQuestion ? false : true}
                    buttonName="Предыдущий вопрос"
                ></Button>
                <Button
                    isDisabled={selectedOption ? false : true}
                    buttonName="Следующий вопрос"
                ></Button>
            </div>
            < Link className={styles.btn_home} to='/'>
                <Button className={styles.btn_home} >На главную</Button>
            </Link>
            <p>TEXT</p>
        </div>
    );
};
