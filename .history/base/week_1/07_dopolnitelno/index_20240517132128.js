const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
console.log(Math.floor(javaScriptDescription.length / 2));
const halfString = javaScriptDescription.slice(0, javaScriptDescription.length / 2)
console.log(halfString);

const replacedStr = halfString.replaceAll('а', 'А').replaceAll('a', 'A').replaceAll('')
console.log(replacedStr);



