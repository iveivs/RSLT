const getQuestions = async () => {
    try {
        const response = fetch('http://localhost:3001/questions')
        
    } catch (error) {
        
    }
    fetch('http://localhost:3001/questions')
    .then(res => res.json())
    .then(data => data)
}