const someDate = Date.now()
console.log(someDate);

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    let birthDayDate = new Date(nextBirthdayDate).getTime();

    const currentDate = Date.now()
    let daysToBirthday = birthDayDate - currentDate

    return convertMsToDays(daysToBirthday)
}

function convertMsToDays(ms) {
    return Math.round(ms / 1000 / 60 / 60 / 24)
}

console.log(getDaysBeforeBirthday('September 5, 2024'));