// const todaysWinner = {
//     prize: '10 000$',
// }

// const winnerApplicants = {
//     '001': {
//         name: 'Максим',
//         age: 25,
//     },
//     '201': {
//         name: 'Светлана',
//         age: 20,
//     },
//     '304': {
//         name: 'Екатерина',
//         age: 35,
//     },
// }

// function getWinner(applicants, winnerObject) {
//     const arreyKeysOfApplicants = Object.keys(applicants)
//     const numberForWinner = getRandomNumberInRange(1, arreyKeysOfApplicants.length + 1)
//     const winnerKey = arreyKeysOfApplicants[numberForWinner - 1]
//     const winner = applicants[winnerKey]
//     const result = {
//         ...winnerObject,
//         ...applicants[winnerKey]
//     }
//     return result
// }

// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// const resultWinner = getWinner(winnerApplicants, todaysWinner);
// console.log('resultWinner', resultWinner);
// // { prize: '10 000$', name: 'Максим', age: 25 }
// - - - - - - - - - - - - - - - - - - - -

// ЧЕРНОВИК
// function getAdultUsers(data) {
//     if (Array.isArray(data)) {
//         let resultArr = data.filter(elem => elem.age >= 18)
//         return resultArr
//     } else {
//         let resultObj = {}
//         for(let key in data){
//             if(data[key].age >= 18) {
//                 resultObj[key] = data[key]
//             }
//         }
//         return resultObj
//     }
// }

// const usersArray = [
//     { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
//     { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
//     { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
//     { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
//     { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
// ];

// const usersObject = {
//     '34rdca3eeb7f6fgeed471198': {
//         id: '34rdca3eeb7f6fgeed471198',
//         name: 'Andrew',
//         age: 25
//     },
//     '76rdca3eeb7f6fgeed471100': {
//         id: '76rdca3eeb7f6fgeed471100',
//         name: 'Alexey',
//         age: 15
//     },
//     '12rdca3eeb7f6fgeed4711012': {
//         id: '12rdca3eeb7f6fgeed4711012',
//         name: 'Egor',
//         age: 13
//     },
//     '32rdca3eeb7f6fgeed471101': {
//         id: '32rdca3eeb7f6fgeed471101',
//         name: 'Kate',
//         age: 31
//     },
//     '98rdca3eeb7f6fgeed471102': {
//         id: '98rdca3eeb7f6fgeed471102',
//         name: 'Elena',
//         age: 18
//     }
// };

// console.log(getAdultUsers(usersArray));
// console.log(getAdultUsers(usersObject));

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
];

function allowVisa(objFromVisaCenter) {
    // const dateNow = Date.now()
    for(let  user in objFromVisaCenter) {
        console.log('user');
        if(user.criminalRecord === false) {
            console.log(objFromVisaCenter[user]);
        }
    }
}

const result = allowVisa(peopleWithVisa);
console.log('result', result);
