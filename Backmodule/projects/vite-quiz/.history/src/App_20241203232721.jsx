import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { MainPage } from "./pages/main/MainPage";
import { getQuestions } from "./utils/utils";
import { Route, Routes } from 'react-router-dom'
import { Card } from "./components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectQuesti } from "../../selectors/select-questions";
import { selectIsLoading } from "../../selectors/select-isLoading";
import { selectError } from "../../selectors/select-error";

function App() {
    const [data, setData] = useState();
    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions); // Селектор для получения вопросов
    const isLoading = useSelector(selectIsLoading);
    const hasError = useSelector(selectError);


    useEffect(() => {
        // getQuestions().then((serverData) => setData(serverData));
    }, []);
    // console.log("data App", data);
    return (
        <>
          <Routes>
            <Route path="/" element={<MainPage  />}  />
            <Route path="/quiz" element={<Card questions={questions}  />}  />
          </Routes>
        </>
    );
}

export default App;
