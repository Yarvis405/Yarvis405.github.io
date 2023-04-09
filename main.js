const app = document.querySelector("#app")
const jsonData = "https://jsonplaceholder.typicode.com/users"

const getData = async (file) => {
    let data = await fetch(file);
    let res = await data.json();
    
    res.forEach(e => {
            app.innerText = e;
    });
}

getData(jsonData);

