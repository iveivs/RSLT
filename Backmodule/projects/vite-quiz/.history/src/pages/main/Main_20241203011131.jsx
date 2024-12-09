import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../selectors/select-questions";
import { loadSuccess } from "../../actions";
import { useEffect } from "react";
import { getQuestions } from "../../utils/utils";

export const Main = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions); // Используем селектор для получения данных из стейта

  useEffect(() => {
    // Загружаем данные при монтировании компонента
    getQuestions()
      .then((serverData) => {
        dispatch(loadSuccess(serverData)); // Диспатчим успешную загрузку
      })
      .catch((error) => {
        console.error("Ошибка загрузки вопросов:", error);
      });
  }, [dispatch]); // Зависимость dispatch для правильного поведения

  return (
    <div>
      <h1>Quiz-Test</h1>
      {/* Рендер вопросов */}
      {questions && questions.length > 0 ? (
        questions.map((question) => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading...</p> // Показываем загрузку, пока вопросов нет
      )}
    </div>
  );
};
