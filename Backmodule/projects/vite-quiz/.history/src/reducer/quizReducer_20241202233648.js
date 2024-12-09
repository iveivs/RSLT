import { getQuestions } from "../utils/utils"
import { ACTION_TYPE } from "../actions";

getQuestions().then((data) => {
    console.log('data reducer',data);
})

const quizReducer = () => {

}