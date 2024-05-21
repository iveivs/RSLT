// function tempFunc() {
//     var a = 10
//     console.log('test');
// }

// if(true) {
//     var b = 5
// }
// console.log(b);
// tempFunc()
// console.log(a);

function milliseconds(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }