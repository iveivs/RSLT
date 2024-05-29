function getDateFormat(date, separator) {
    let getDateDay = new Date(date)
    let day = getDateDay.getDate()
    day > 10 ? day : ('0' + day)
    console.log(day);
    // const month = date.getMonth()
    // const year = date.getFullYear()
    // const dateArr = [day, month, year]
}
console.log(getDateFormat(495626400000, '.'));