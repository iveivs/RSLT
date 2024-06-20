const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
const createNewPost = () => {
    isLoading = true;
    fetch(POSTS_URL, {
        method: "POST"
    })
        .then((response) => response.json())
        .then((result) => {
            console.log("result", result);
        })
        .catch((error) => {
            console.log("error", error);
        })
        .finally(() => {
            isLoading = false;
        });
};
// createNewPost();

const asyncCreateNewPost = async () => {
    try {
        const response = await fetch(POSTS_URL, {
            method: "POST"
        })
        if (!response.ok) {
            throw new Error('Ошибка')
        }
        const result = await response.json()
        console.log('result', result);
    } catch (error) {
        console.log('error', error);
    } finally {
        isLoading = false;
    }
}

// const promise = asyncCreateNewPost()
// console.log('promise', promise);

// - - - - - - - - - - - - - - - - - - - - - -

// Задание 2

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((data) => data.json());
            return Promise.all(dataResults)
        })
        .then((allTasks) => {
            console.log(allTasks);
        })
        .catch((error) => {
            console.log(error);
        })
}
// getTodosByIds([43, 21, 55, 100, 10]);

const asyncGetTodosByIds = async (ids) => {
    try {
        const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const arrResponse = await Promise.all(requests)
        const dataResults = arrResponse.map((data) => data.json())
        const allTasks = await Promise.all(dataResults);
        console.log('allTasks', allTasks);
    } catch (error) {
        console.error(error);
    }
}

// asyncGetTodosByIds([43, 21, 55, 100, 10]);

// - - - - - - - - - - - - - - - - - - - - - -

// Задание 3

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'


const renderAlbums = async () => {
    const dataContainer = document.createElement('ol')
    dataContainer.className = 'data-container'
    // dataContainer.textContent = 'Albums'
    document.body.append(dataContainer)

    // <span id="loader" hidden>Loading...</span>
    const loader = document.createElement('span')
    loader.setAttribute('id', 'loader')
    loader.textContent = 'Loading...'
    loader.setAttribute('hidden', null)
    dataContainer.prepend(loader)

    try {
        const isHidden = loader.hasAttribute('hidden')
        if (isHidden) {
            loaderHtml.removeAttribute('hidden')
        } else {
            loaderHtml.setAttribute('hidden', '')
        }
        const request = await fetch(ALBUMS_URL)
        if (!request.ok) {
            dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
            throw new Error('Произошла ошибка в получении данных об альбомах...')
        }
        const albums = await request.json()
        const markUpArr = albums.map((elem) => elem.title)
        markUpArr.forEach((elem) => {
            const listItem = `<li>${elem}</li>`
            // dataContainer.insertAdjacentHTML('afterbegin' ,listItem)
        })
    } catch (error) {
        console.log('error', error);
    }

}
renderAlbums()
