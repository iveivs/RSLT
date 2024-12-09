const getQuestions = async () => {
    try
    fetch('http://localhost:3001/questions')
    .then(res => res.json())
    .then(data => data)
}