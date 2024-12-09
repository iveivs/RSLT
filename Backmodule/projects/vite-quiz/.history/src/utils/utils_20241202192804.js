const getQuestions = () => {
    fetch('http://localhost:3001/questions')
    .then(res => res.JSON)
}