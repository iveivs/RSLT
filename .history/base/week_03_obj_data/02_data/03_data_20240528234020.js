function getDateFormat(date, separator = '.') {
    let getDateDay = new Date(date)
    let day = getDateDay.getDate()
    if(day < 10) {
        day = '0' + day
    }
    let month = getDateDay.getMonth() + 1
    month < 10 ? month = '0' + month : month = month
    
    const year = getDateDay.getFullYear()
    const dateArr = [day, month, year]
    return dateArr.join(`${separator}`)
}
// console.log(getDateFormat(495626400000, '.'));
console.log(getDateFormat(494762400000));
