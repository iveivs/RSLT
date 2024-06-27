const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

func(() => {
    console.log("FROM ANONIM CALBCK");
})
console.log('LOG');

const somePromise = new Promise((res, rej) => {
    res()
})

somePromise.then((toRes) => {
    return console.log('toRes');
})
console.log(somePromise);