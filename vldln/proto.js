const persone = new Object({
    name: 'Mxm',
    age: 25,
    greet(){
        console.log('Greet');
    }
})

Object.prototype.sayHello = function(){
    console.log('Hello');
}

const lena = Object.create(persone)
lena.name = 'Elena'
console.log(lena);

persone.sayHello()