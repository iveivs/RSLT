// export const getQuestions = async () => {
//     try {
//         const response = await fetch('http://localhost:3001/questions')
//         if(!response.ok){
//             throw new Error("Ошибка: ${response.status}")
//         }
//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.error("Ошибка при получении вопросов:", error);
//         throw error;
//     }
// }




// fetch('http://localhost:3001/questions')
// .then(res => res.json())
// .then(data => data)