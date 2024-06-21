const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

func(() => {
    console.log("FROM ANONIM CALB");
})
console.log('LOG');