// console.log('Hello from app.js');
// document.addEventListener('click', (event) => {
//     if (event.target.dataset.type === "remove") {
//         const id = event.target.dataset.id
//         // console.log('id', id);
//         remove(id).then(() => {
//             event.target.closest('li').remove()
//         })
//     }
//     if(event.target.dataset.type === "edit"){
//         const editedTitle = prompt()
//         if( editedTitle !== null && editedTitle !== ''){
//             console.log(editedTitle);
//         }
//     }
// })

// async function remove(id) {
//     await fetch(`/${id}`, {
//         method: 'DELETE'
//     })
// }

// async function submitEditedTitle() {
//     await fetch('/', {

//     })
// }
console.log('Hello from app.js');

document.addEventListener('click', (event) => {
    if (event.target.dataset.type === "remove") {
        const id = event.target.dataset.id
        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }

    if (event.target.dataset.type === "edit") {
        const listItem = event.target.closest('li')  // Выбираем родительский элемент li
        const id = listItem.querySelector('button[data-type="remove"]').dataset.id
        const newTitle = prompt('Введите новое название:', listItem.firstChild.textContent.trim())

        if (newTitle) {
            update(id, newTitle).then(() => {
                listItem.firstChild.textContent = newTitle  // Обновляем текстовое содержимое
            })
        }
    }
})

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}

async function update(id, title) {
    await fetch(`/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    })
}