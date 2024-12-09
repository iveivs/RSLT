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



