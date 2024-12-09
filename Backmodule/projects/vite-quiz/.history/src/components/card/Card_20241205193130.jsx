// import styles from "./Card.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     selectCurrentQuestion,
//     selectIsLoading,
//     selectError,
// } from "../../selectors";
// import { Button } from "../Button/Button";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { setCurentQuestion } from "../../actions/set-current-question";
// import { useEffect } from "react";



// export const Card = ({ questions }) => {
//     const dispatch = useDispatch();
//     const currentQuestion = useSelector(selectCurrentQuestion);
//     const isLoading = useSelector(selectIsLoading);
//     const hasError = useSelector(selectError);
//     const [selectedOption, setSelectedOption] = useState(null);

//     useEffect(() => {
//         if (selectedOption === questions[currentQuestion].correctAnswer) {
//             console.log('Right');
//         }
//     }, [selectedOption, currentQuestion, questions]);

//     console.log("selectedOption", selectedOption);

//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestion < questions.length - 1) {
            
//             dispatch(setCurentQuestion(currentQuestion + 1))
//             setSelectedOption(null)
//         }
//     };
    
//     const handlePrevQuestion = () => {
//         if (currentQuestion > 0) {
            
//             dispatch(setCurentQuestion(currentQuestion - 1))
//         }
//     };

//     return (
//         <div className={styles.wrapper}>
//             {!isLoading && !hasError && questions && questions.length > 0 && (
//                 <>
//                     <h2 className={styles.question}>
//                         {questions[currentQuestion].question}
//                     </h2>
//                     <form className={styles.form}>
//                         <div className={styles.optionsContainer}>
//                             {questions[currentQuestion].options.map(
//                                 (option, index) => (
//                                     <label
//                                         key={index}
//                                         className={styles.option}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="quiz"
//                                             value={option}
//                                             checked={selectedOption === option}
//                                             onChange={handleOptionChange}
//                                         />
//                                         {option}
//                                     </label>
//                                 )
//                             )}
//                         </div>
//                     </form>
//                 </>
//             )}
//             <div className={styles.btn_slider_box}>
//                 <Button
//                     isDisabled={currentQuestion ? false : true}
//                     buttonName="Предыдущий вопрос"
//                     onClick={handlePrevQuestion}
//                 ></Button>
//                 <Button
//                     isDisabled={selectedOption ? false : true}
//                     buttonName="Следующий вопрос"
//                     onClick={handleNextQuestion}
//                 ></Button>
//             </div>
//             < Link className={styles.btn_home} to='/'>
//                 <p>На главную</p>
//             </Link>
            
//         </div>
//     );
// };

import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import {
    selectCurrentQuestion,
    selectIsLoading,
    selectError,
} from "../../selectors";
import { setCurentQuestion } from "../../actions/set-current-question";

export const Card = ({ questions }) => {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectError);

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (selectedOption === questions[currentQuestion]?.correctAnswer) {
            console.log("Right");
        }
    }, [selectedOption, currentQuestion, questions]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            dispatch(setCurentQuestion(currentQuestion + 1));
            setSelectedOption(null);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            dispatch(setCurentQuestion(currentQuestion - 1));
        }
    };

    if (!questions || questions.length === 0) {
        return <div className={styles.wrapper}>Вопросы отсутствуют.</div>;
    }

    if (currentQuestion >= questions.length) {
        return <div className={styles.wrapper}>Вопросы закончились.</div>;
    }

    return (
        <div className={styles.wrapper}>
            {!isLoading && !hasError && (
                <>
                    <h2 className={styles.question}>
                        {questions[currentQuestion].question}
                    </h2>
                    <form className={styles.form}>
                        <div className={styles.optionsContainer}>
                            {questions[currentQuestion].options.map(
                                (option, index) => (
                                    <label key={index} className={styles.option}>
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
                    isDisabled={currentQuestion === 0}
                    buttonName="Предыдущий вопрос"
                    onClick={handlePrevQuestion}
                />
                <Button
                    isDisabled={!selectedOption}
                    buttonName="Следующий вопрос"
                    onClick={handleNextQuestion}
                />
            </div>
            <Link className={styles.btn_home} to="/">
                <p>На главную</p>
            </Link>
        </div>
    );
};

