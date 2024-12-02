console.log('Hello from app');
let isEdit = false

document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }

    if(event.target.dataset.type === 'edit') {
        console.log('CLICK EDIT');
        let noteTitle = event.target.closest('list-title')
        
        // noteTitle.textContent = ''
    }
})

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}