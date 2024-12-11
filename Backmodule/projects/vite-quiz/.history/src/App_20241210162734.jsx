import { useEffect } from "react";
import "./App.css";
import { MainPage } from "./pages/main/MainPage";
import { getQuestions } from "./utils/utils";
import { Route, Routes } from 'react-router-dom'
import { Card } from "./components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "./selectors/select-questions";
import { selectIsLoading } from "./selectors/select-isLoading";
import { selectError } from "./selectors/select-error";
import { startLoading, loadSuccess, loadFailure, setCurentAnswers } from "./actions";

function App() {
    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions)

    useEffect(() => {
      dispatch(startLoading()); 
      getQuestions()
          .then((serverData) => {
              dispatch(loadSuccess(serverData));
              const arrForCorrectAnswer = serverData.map(elem => false)
              dispatch(setCurentAnswers())
          })
          .catch((error) => {
              console.error("Ошибка загрузки вопросов:", error);
              dispatch(loadFailure()); 
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
