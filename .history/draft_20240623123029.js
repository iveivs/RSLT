const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

func(() => {
    console.log("FROM ANONIM CALBCK");
})
console.log('LOG');

const somePromise = new Promise((res, rej) => {
    return res()
})

somePromise.then((toRes) => {
    return console.log();
})
console.log(somePromise);