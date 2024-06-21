const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

func(() => {
    console.log("FROM ANONIM CAL");
})
console.log('LOG');