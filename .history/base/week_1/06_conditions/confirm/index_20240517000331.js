Задание #3

const questionsAndAnswers2 = [
    {question: 'JavaScript появился в 1995 году?', answer: '1996', flag: false},
    {question: 'Спецификация JavaScript называется ECMAScript?', answer: 'ECMAScript', flag: true},
    {question: 'JavaScript был создан за 1 месяц?', answer: '10 дней', flag: false},   
]

questionsAndAnswers2.forEach(elem => {
    let currentAnswer = confirm(elem.question)
    currentAnswer === elem.flag ? alert('Верно') : alert(`Не верно, правильный ответ ${elem.answer}`)
})