import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { MainPage } from "./pages/main/MainPage";
import { getQuestions } from "./utils/utils";
import { Route, Routes } from 'react-router-dom'
import { Card } from "./components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "./selectors/select-questions";
import { selectIsLoading } from "./selectors/select-isLoading";
import { selectError } from "./selectors/select-error";

function App() {
    const [data, setData] = useState();
    // const [questions, setQuestions] = useState()
    const dispatch = useDispatch();
    const questions = useSelector(s)
    // console.log('questions', questions);

    useEffect(() => {
      dispatch(startLoading()); // Устанавливаем состояние загрузки
      getQuestions()
          .then((serverData) => {
              dispatch(loadSuccess(serverData)); // Обрабатываем успешную загрузку
          })
          .catch((error) => {
              console.error("Ошибка загрузки вопросов:", error);
              dispatch(loadFailure()); // Обрабатываем ошибку загрузки
          });
  }, [dispatch]);
    return (
        <>
          <Routes>
            <Route path="/" element={<MainPage  />}  />
            <Route path="/quiz" element={<Card questions={questions} />}  />
          </Routes>
        </>
    );
}

export default App;
