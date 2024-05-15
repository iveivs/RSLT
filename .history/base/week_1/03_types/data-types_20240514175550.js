const variableForString = 'some string'
const variableForNum = 123
const variableForBolean = true
const variableForSymbal = Symbol('variableForSymbal')
const variableForObject = {
    someName: 'Result',
    someNumber: 42
}
const variableForBigint = 10n
const variableForNull = null
const variableForUndefined = undefined

console.log(variableForSymbal);

console.log(`
    ${variableForString}
    ${variableForNum}
    ${variableForBolean}
    ${variableForObject}
    ${variableForBigint}
    ${variableForNull}
    ${variableForUndefined}
    ${variableForSymbal}
`);
