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

function getWinner(applicants, winnerOnumberForWinner = getRandomNumberInRange(1, 305)bject) {
    let 
    console.log('numberForWinner', numberForWinner);
    let arreyKeysOfApplicants = Object.keys(applicants)
    console.log(arreyKeysOfApplicants);
    while(arreyKeysOfApplicants.includes(numberForWinner)){

    }
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 