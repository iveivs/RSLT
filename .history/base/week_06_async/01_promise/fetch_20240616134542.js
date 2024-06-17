const TODOS URL = 'https://jsonplaceholder.typicode.com/todos' 
fetch()
      .then(response => response.json())
      .then(json => console.log(json))