function getDateFormat(date, separator) {
    let getDay = new Date(date)
    let day = getDay.getDay()
    day > 10 ? day : ('0' + getDay.getDay())
    console.log(day);
    // const month = date.getMonth()
    // const year = date.getFullYear()
    // const dateArr = [day, month, year]
}
console.log(getDateFormat(494762400000, '.'));