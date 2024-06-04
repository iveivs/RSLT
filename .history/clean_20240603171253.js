function ajK(){
    let some = {
        go: 'Yes'
    }
    console.log(this);
}
ajK()
console.log(ajK());
console.log(this);