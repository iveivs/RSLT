// Задание #1

function getDateFormat(date, separator = '.') {
    let getDateData = new Date(date)

    let day = getDateData.getDate()
    if(day < 10) day = '0' + day

    let month = getDateData.getMonth() + 1
    month < 10 ? month = '0' + month : month = month
    
    const year = getDateData.getFullYear()
    const dateArr = [day, month, year]
    return dateArr.join(`${separator}`)
}
console.log(getDateFormat(494762400000));

// Задание #2
// вариант 1

// const birthDayDate = new Date('June 5, 2024').getTime()

// const getDaysBeforeBirthday = (nextBirthdayDate) => {
//     const currentDate = Date.now()
//     let dayToBirthday = (nextBirthdayDate - currentDate) / 1000 / 60 / 60 / 24
//     return dayToBirthday.toFixed()
// }
// console.log(getDaysBeforeBirthday(birthDayDate));

// вариант 2

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    let birthDayDate = new Date(nextBirthdayDate).getTime();

    const currentDate = Date.now()
    let daysToBirthday = birthDayDate - currentDate

    return convertMsToDays(daysToBirthday)
}

function convertMsToDays(ms) {
    return Math.round(ms / 1000 / 60 / 60 / 24)
}

console.log(getDaysBeforeBirthday('June 5, 2024'));

// Задание #3

const addDays = (date, days) => {
    let dateInMs = new Date(date).getTime();
    console.log(dateInMs);
}

