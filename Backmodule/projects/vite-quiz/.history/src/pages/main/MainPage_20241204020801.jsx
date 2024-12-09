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
    // const questions = useSelector(selectQuestions); 
    // const isLoading = useSelector(selectIsLoading); 
    // const hasError = useSelector(selectError); 

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

