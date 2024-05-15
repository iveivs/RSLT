const variableForString = 'some'
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

console.log(`
variableForString: ${variableForString}, typeof: ${typeof variableForString}
variableForNum: ${variableForNum}, typeof: ${typeof }
    ${variableForBolean}, typeof: ${typeof }
    , typeof: ${typeof }
    ${variableForObject}
    ${variableForBigint}
    ${variableForNull}
    ${variableForUndefined}
`);

console.log(variableForSymbal);
