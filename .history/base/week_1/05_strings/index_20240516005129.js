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

let myInfoText = resultString.replaceAll("JavaScript", "javascript")
myInfoText
console.log(myInfoText);
console.log(myInfoText.length);
console.log('test');
console.log('первый символ:', myInfoText[0], myInfoText[myInfoText.length - 1]);
console.log('test 2');


