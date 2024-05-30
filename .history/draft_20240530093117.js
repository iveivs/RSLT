const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

function getWinner(applicants, winnerObject) {
    let arreyKeysOfApplicants = Object.keys(applicants)
    console.log(arreyKeysOfApplicants);
    let numberForWinner = getRandomNumberInRange(1, arreyKeysOfApplicants.length + 1)
    console.log('numberForWinner', numberForWinner);
    const winner = arreyKeysOfApplicants[numberForWinner - 1]
    console.log(winner);
    
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 