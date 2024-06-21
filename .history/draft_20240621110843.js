const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

func(() => {
    console.log();
})
console.log('LOG');