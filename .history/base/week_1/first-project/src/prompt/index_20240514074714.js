const questions = [
    {question1: 'Сколько будет 2 + 2?', answer: 4},
    {question1: 'Чему равен корень из 9?', answer: 3},
    {question1: 'Сколько будет 2 в 5-й степени? ', answer: 4},
    
]

let qiestionOne = prompt('Сколько будет 2 + 2?')
if(+qiestionOne === 4){
    alert('Ты прав.')
} else {
    alert('Неверный ответ.')
}

// prompt('Чему равен корень из 9?')
// Сколько будет 2 в 5-й степени? 