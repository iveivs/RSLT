function getDateFormat(date, separator) {
    let get = new Date(date)
    let day = getDate.getDay()
    day > 10 ? day : ('0' + day)
    console.log(day);
    // const month = date.getMonth()
    // const year = date.getFullYear()
    // const dateArr = [day, month, year]
}
console.log(getDateFormat(494762400000, '.'));