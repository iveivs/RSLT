// import { useDispatch, useSelector } from "react-redux";
// import { selectQuestions } from "../../selectors/select-questions";
// import { loadSuccess } from "../../actions";
// import { useEffect } from "react";
// import { getQuestions } from "../../utils/utils";

// export const MainPage = () => {
//     const dispatch = useDispatch();
//     const questions = useSelector(selectQuestions);

//     useEffect(() => {
//         getQuestions()
//             .then((serverData) => {
//                 dispatch(loadSuccess(serverData));
//             })
//             .catch((error) => {
//                 console.error("Ошибка загрузки вопросов:", error);
//             });
//     }, [dispatch]);

//     return (
//         <div>
//             <h1>Quiz-Test</h1>
//             {/* Рендер вопросов */}
//             {questions && questions.length > 0 ? (
//                 questions.map((question) => (
//                     <div key={question.id}>
//                         <h3>{question.question}</h3>
//                         <ul>
//                             {question.options.map((option, index) => (
//                                 <button key={index}>{option}</button>
//                             ))}
//                         </ul>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading...</p> // Показываем загрузку, пока вопросов нет
//             )}
//         </div>
//     );
// };

import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../selectors/select-questions";
import { selectIsLoading } from "../../selectors/select-isLoading";
import { selectError } from "../../selectors/select-error";
import { startLoading, loadSuccess, loadFailure } from "../../actions";
import { useEffect } from "react";
import { getQuestions } from "../../utils/utils";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export const MainPage = () => {
    // const dispatch = useDispatch();
    const questions = useSelector(selectQuestions); // Селектор для получения вопросов
    const isLoading = useSelector(selectIsLoading); // Селектор для состояния загрузки
    const hasError = useSelector(selectError); // Селектор для состояния ошибки

    // useEffect(() => {
    //     dispatch(startLoading()); // Устанавливаем состояние загрузки
    //     getQuestions()
    //         .then((serverData) => {
    //             dispatch(loadSuccess(serverData)); // Обрабатываем успешную загрузку
    //         })
    //         .catch((error) => {
    //             console.error("Ошибка загрузки вопросов:", error);
    //             dispatch(loadFailure()); // Обрабатываем ошибку загрузки
    //         });
    // }, [dispatch]);

    return (
        <div>
            <h1>Quiz-Test</h1>
            <Link to="/quiz">
                <Button  buttonName="Загрузить тест" />
            </Link>
            
            <Button buttonName="Редактировать тест" />
        </div>
    );
};


{/* <div>
            <h1>Quiz-Test</h1>
            {isLoading && <p>Loading...</p>} 
            {hasError && (
                <p>Ошибка загрузки данных. Попробуйте ещё раз.</p>
            )}{" "}
            {!isLoading &&
                !hasError &&
                questions &&
                questions.length > 0 &&
                questions.map((question) => (
                    <div key={question.id}>
                        <h3>{question.question}</h3>
                        <ul>
                            {question.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </div>
                ))}
        </div> */}
