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
    const [questions, setQuestions] = useState()
    const dispatch = useDispatch();
    console.log('questions', questions);
    
    // const isLoading = useSelector(selectIsLoading);
    // const hasError = useSelector(selectError);


    useEffect(() => {
        const questions = useSelector(selectQuestions); 
        setQuestions(questions)
        
    }, []);
    // console.log("data App", data);
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
