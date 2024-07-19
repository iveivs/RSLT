// const WIN_PATTERNS = [
// 	[0, 1, 2], [3, 4, 5], [6, 7, 8],
// 	[0, 3, 6], [1, 4, 7], [2, 5, 8],
// 	[0, 4, 8], [2, 4, 6]
// ];
// const findedElemIndexes = [0, 1, 4, 7];

// const containsPattern = (patterns, indexes) => {
// 	for (let pattern of patterns) {
// 		if (pattern.every(index => indexes.includes(index))) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

// // Пример использования:
// const result = containsPattern(WIN_PATTERNS, findedElemIndexes);
// console.log(result); // true, если найдется хотя бы один паттерн

const arr = [1, 3, 4, 2]
const isFinded = arr.some(el=> el % 2 = )
