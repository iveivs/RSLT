console.log('Hello from app');

document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id
        

    }
})

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}