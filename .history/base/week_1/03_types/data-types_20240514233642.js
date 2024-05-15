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
variableForBolean: ${variableForBolean}, typeof: ${typeof }
    ${variableForObject}, typeof: ${typeof }
    ${variableForBigint}, typeof: ${typeof }
    ${variableForNull}, typeof: ${typeof }
    ${variableForUndefined}, typeof: ${typeof }
`);

console.log(variableForSymbal);
