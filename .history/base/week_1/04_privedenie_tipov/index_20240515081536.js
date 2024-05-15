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

console.log('str:', Number(str), String(str), Boolean(str));
console.log('num:',Number(num), String(num), Boolean(num));
console.log('bln:',Number(bln), String(bln), Boolean(bln));
console.log('obj:',Number(obj), String(obj), Boolean(obj));
console.log('bgnt:',Number(bgnt), String(bgnt), Boolean(bgnt));
console.log('nl:',Number(nl), String(nl), Boolean(nl));
console.log('undfn:',Number(undfn), String(undfn), Boolean(undfn));
console.log(':',Number(), String(), Boolean());