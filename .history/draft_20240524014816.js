const a = '20'
console.log('test', Number(isNaN(a)));
const b = 'a'
const c = Number(a)
const d = Number(b)
console.log(typeof c, c, isNaN(c));
console.log(typeof d, d, isNaN(d));
