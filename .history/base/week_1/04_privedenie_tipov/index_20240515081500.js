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

console.log(':', Number(str), String(str), Boolean(str));
console.log(':',Number(num), String(num), Boolean(num));
console.log(':',Number(bln), String(bln), Boolean(bln));
console.log(':',Number(obj), String(obj), Boolean(obj));
console.log(':',Number(bgnt), String(bgnt), Boolean(bgnt));
console.log(':',Number(nl), String(nl), Boolean(nl));
console.log(Number(undfn), String(undfn), Boolean(undfn));
console.log(Number(), String(), Boolean());