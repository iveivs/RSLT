function getDateFormat(date, separator) {
    let getDay = new Date(date)
    let day
    day > 10 ? (getDay.getDay()) : ('0' + getDay.getDay())
    console.log(day);
    // const month = date.getMonth()
    // const year = date.getFullYear()
    // const dateArr = [day, month, year]
}
console.log(getDateFormat(494762400000, '.'));