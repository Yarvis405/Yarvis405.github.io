const app = document.querySelector("#app")
const jsonData = "https://jsonplaceholder.typicode.com/users"

const getData = async () => {
    let data = await fetch(jsonData);
    let res = await data.json();
    
    for (i in res.players){
        app.innerText = res.players[i]
    }
}

getData();

