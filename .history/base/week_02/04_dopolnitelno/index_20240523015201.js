// Задание #1

// function checkQuestionAnswer(question, correctAnswer) {
//     let answer = prompt(`${question}`).trim().toLowerCase()
//     console.log(answer);
//     answer === correctAnswer.toLowerCase() ? alert('Ответ верный') : alert('Ответ не верный')
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

// Задание #2

const showSuccessMessage = (message) => {
    console.log(message);
}

const showErrorMessage = (message) => {
    console.error(message);
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let isFined = false
    for (let i = 0; i < text.length; i++) {
        if(text[i] === errorSymbol) {
            isFined = true
            errorCallback()
            // console.log('test1', text[i], errorSymbol);
        }
    }
    isFined ? errorCallback() : null
}
const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
checkTextOnErrorSymbol(text, 'ъ', showSuccessMessage, showErrorMessage);


