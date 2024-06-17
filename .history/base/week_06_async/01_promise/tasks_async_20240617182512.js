// Задание #1
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const createUserElement = (text) => {
    const todoElement = document.createElement('li')
    const todoElemAnchor = document.createElement('a')
    todoElemAnchor.href = '#'
    todoElemAnchor.textContent = text
    todoElement.append(todoElemAnchor)
    return todoElement
}

const toggleLoader = () => {
    const loaderHtml = document.querySelector('#loader')
    const isHidden = loaderHtml.hasAttribute('hidden')
    if (isHidden) {
        loaderHtml.removeAttribute('hidden')
    } else {
        loaderHtml.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector('#data-container')

const getAllUsers = () => {
    toggleLoader()
    const result = fetch(USERS_URL)

    result
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then((users) => {
            users.forEach((user) => {
                const userHtml = createUserElement(user.name)
                dataContainer.append(userHtml)
            })
        })
        .catch((error) => {
            console.error('error', error);
        })
        .finally(() => {
            toggleLoader()
        })
}

getAllUsers()

// Задание #2

const createTodoElement2 = (text) => {
    return `
    <li><a href="#">${text}</a></li>
    `
}

const toggleLoader2 = () => {
    const loaderHtml = document.querySelector('#loader2')
    const isHidden = loaderHtml.hasAttribute('hidden')
    if (isHidden) {
        loaderHtml.removeAttribute('hidden')
    } else {
        loaderHtml.setAttribute('hidden', '')
    }
}


const dataContainer2 = document.querySelector('#data-container2')

const getUsersByIds = (idsArray) => {
    toggleLoader2()
    const request = idsArray.map(id => fetch(`${USERS_URL}/${id}`))
    Promise.all(request)
        .then(responses => {
            responses.forEach(response => {
                if (!response.ok) {
                    throw new Error('Ошибка запроса')
                }
            })
            const dataResults = responses.map((response => response.json()))
            return Promise.all(dataResults)
        })
        .then(users => {
            users.forEach(user => {
                const userHtml = createTodoElement2(user.name)
                dataContainer2.insertAdjacentHTML('beforeend', userHtml)
            })

        })
        .catch((error) => {
            console.error("ERROR", error);
        })
        .finally(() => {
            toggleLoader2()
        })
}

getUsersByIds([5, 6, 2, 1])
// - - - - - - - - - - - - - - - - - - - - - - - - - -

// Задание #3

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'
const photoContainer = document.querySelector('#photo-container')

const getFastestLoadedPhoto = (ids) => {
    const request = ids.map(id => fetch(`${PHOTO_URL}/${id}`))
    console.log('photo request', request);
    Promise.race(request)
        .then((result) => {
            
            const res = result.json()
            console.log('res',res);
            return res
        })
        .then((data) => {
            console.log('data',data);
            const photoHtml = `<li class="photo-item">
                <img class="photo-item__image" src=${data.url}>
                <h3 class="photo-item__title">
                ${data.title}
            </h3>
        </li>`
        photoContainer.insertAdjacentHTML('beforeend', photoHtml)
        })
}
getFastestLoadedPhoto([60, 12, 55])


