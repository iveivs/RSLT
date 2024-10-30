console.log('Hello from app.js');
document.addEventListener('click', (event) => {
    if(event.target.dataset.type === "remove"){
        console.log(object);
    }
})