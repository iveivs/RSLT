const func = (cal) => {
    console.log('FROM FUNC');
    cal()
}

const clbk = () => {
    console.log('From CLBK');
}
func(clbk)
console.log('LOG');