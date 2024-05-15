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
variableForString: ${variableForString}, typeof: ${typeof variableForString}\n
variableForNum: ${variableForNum}, typeof: ${typeof variableForNum}\n
variableForBolean: ${variableForBolean}, typeof: ${typeof variableForBolean}\n
variableForObject: ${variableForObject}, typeof: ${typeof variableForObject}\n
variableForBigint: ${variableForBigint}, typeof: ${typeof variableForBigint}\n
variableForNull: ${variableForNull}, typeof: ${typeof variableForNull}\n
variableForUndefined: ${variableForUndefined}, typeof: ${typeof variableForUndefined}\n
`);

console.log('variableForSymbal: ',variableForSymbal, 'typeof:', (typeof variableForSymbal));
