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

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const currentDate = Date.now()
    console.log(currentDate);
    let dayToBirthday = (nextBirthdayDate - currentDate) /
    return dayToBirthday
}

console.log(getDaysBeforeBirthday(1725483600000));