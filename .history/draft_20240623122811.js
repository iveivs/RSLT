const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

func(() => {
    console.log("FROM ANONIM CALBCK");
})
console.log('LOG');

const somePromise = new Promise(re)
console.log(somePromise);