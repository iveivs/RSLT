const myName = 'Svetoslav'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилен'
const reasonText = 'хочу сменить вид деятельности'
const numberOfMonth = 9

const resultString = `Всем привет! Меня зовут ${myName}. 
    Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
    Я хочу стать веб-разработчиком, потому что ${reasonText}. 
    До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. 
    Я уверен, что пройду данный курс до конца!`
// console.log(resultString);

// Задание #2

let myInfoText = resultString.replaceAll("JavaScript", "javascript").replaceAll("курс", "КУРС")
console.log(myInfoText);
console.log(myInfoText.length);
console.log('первый символ:', myInfoText[0], myInfoText[myInfoText.length - 1]);

// Задание #3

// const userName = prompt('Как вас зовут?').toLocaleLowerCase().trim();
// alert(`Вас зовут: ${userName}`)

// Задание #4

// const userAge = Number(prompt('Сколько вам лет?').trim())
// console.log(userAge);

// alert(`Вас зовут ${userName} и вам ${userAge} лет`)

// Задание #5

const userString = prompt('Введите текст для обрезки').trim()

const reg = /\s*,\s*/

const userCutParamsArr = prompt('Введите ЧЕРЕЗ ЗАПЯТУЮ индексы, начала и конца обрезки строки').split(reg)

if(userCutParamsArr.length === 2 && +userCutParamsArr[0] < +userCutParamsArr[1] && +userCutParamsArr[0] <= userCutParamsArr.length - 1 ) {
    let resString = userString.slice(userCutParamsArr[0], userCutParamsArr[1])
    alert(`Результат: ${resString}`)
} else {
    alert('Вы ввели некорректные данные')
}

// && +userCutParamsArr[0] <= userCutParamsArr.length




