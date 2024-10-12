
export const deleteSession = (hash) => {

}
    fetch(`http://localhost:3000/sessions/${hash}`, {
        method: 'DELETE',
    })
