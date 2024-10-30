console.log('Hello from app.js');
document.addEventListener('click', (event) => {
    if (event.target.dataset.type === "remove") {
        const id = event.target.dataset.id
        // console.log('id', id);

    }
})

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}