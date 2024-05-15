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

console.log('str:', Number(str), String(str), Boolean(str)); // str: NaN some true
console.log('num:',Number(num), String(num), Boolean(num)); // num: 123 123 true
console.log('bln:',Number(bln), String(bln), Boolean(bln));// bln: 1 true true
console.log('obj:',Number(obj), String(obj), Boolean(obj)); // obj: NaN [object Object] true
console.log('bgnt:',Number(bgnt), String(bgnt), Boolean(bgnt)); // bgnt: 10 10 true
console.log('nl:',Number(nl), String(nl), Boolean(nl)); // nl: 0 null false
console.log('undfn:',Number(undfn), String(undfn), Boolean(undfn)); // undfn: NaN undefined false
console.log('smbl:',String(), Boolean());