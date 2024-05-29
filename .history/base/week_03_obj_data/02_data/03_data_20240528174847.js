function getDateFormat(date, separator) {
    let day
    day > 10 ? (date.getDay()) : ('' + date.getDay())
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateArr = [day, month, year]
}