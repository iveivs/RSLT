function getDateFormat(date, separator) {
    let getDay = new Date()
    day > 10 ? (date.getDay()) : ('0' + date.getDay())
    console.log(day);
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateArr = [day, month, year]
}
console.log(getDateFormat(494762400000, '.'));