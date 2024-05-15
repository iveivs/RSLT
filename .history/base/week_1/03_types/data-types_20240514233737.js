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
variableForNum: ${variableForNum}, typeof: ${typeof variableForNum}
variableForBolean: ${variableForBolean}, typeof: ${typeof variableForBolean}
variableForObject: ${variableForObject}, typeof: ${typeof variableForObject}
variableForBigint: ${variableForBigint}, typeof: ${typeof variableForBigint}
variableForNull: ${variableForNull}, typeof: ${typeof variableForNull}
variableForUndefined: ${variableForUndefined}, typeof: ${typeof variableForUndefined}
`);

console.log(variableForSymbal);
