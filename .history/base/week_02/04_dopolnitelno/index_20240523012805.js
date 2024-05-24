function checkQuestionAnswer(question, correctAnswer) {
    let answer = prompt(`${question}`).trim().toLowerCase()
    console.log(answer);
    answer === correctAnswer.toLowerCase() ? alert('Ответ верный') 
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');