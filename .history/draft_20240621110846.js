const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

func(() => {
    console.log("FROM ");
})
console.log('LOG');