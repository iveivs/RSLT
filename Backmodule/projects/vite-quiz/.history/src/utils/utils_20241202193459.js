const getQuestions = async () => {
    try {
        const response = fetch('http://localhost:3001/questions')
        if(!response.ok){
            throw new Error()
        }
    } catch (error) {
        
    }
    fetch('http://localhost:3001/questions')
    .then(res => res.json())
    .then(data => data)
}