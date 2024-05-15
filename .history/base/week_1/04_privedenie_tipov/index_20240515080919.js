const str = 'some'
const num = 123
const bln = true
const obj = {
    someName: 'Result',
    someNumber: 42
}
const bgnt = 10n
const nl = null
const undfn = undefined
const smbl = Symbol('variableForSymbal')

console.log(Number(str), String(str), Boolean(str));
console.log(Number(num), String(num), Boolean(num));
console.log(Number(bln), String(), Boolean());
console.log(Number(), String(), Boolean());
console.log(Number(), String(), Boolean());
console.log(Number(), String(), Boolean());
console.log(Number(), String(), Boolean());
console.log(Number(), String(), Boolean());