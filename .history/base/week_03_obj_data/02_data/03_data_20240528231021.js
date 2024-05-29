function getDateFormat(date, separator) {
    let getDateDay = new Date(date)
    let day = getDateDay.getDate()
    if(day < 10) {
        console.log('TEST');
        day = '0' + day
        console.log(day);
    }
    // day < 10 ?  day : '0' + day
    console.log(day);
    let month = getDateDay.getMonth() + 1
    month < 10 ? month = '0' + month : month = month
    console.log(month);
    const year = getDateDay.getFullYear()
    const dateArr = [day, month, year]
    return 
    console.log(dateArr);
}
// console.log(getDateFormat(495626400000, '.'));
console.log(getDateFormat(494762400000, '.'));
