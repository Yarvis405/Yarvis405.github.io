const app = document.querySelector("#app")
const jsonData = "https://jsonplaceholder.typicode.com/users"

const getData = async (file) => {
    let data = await fetch(file);
    let res = await data.json();
    
    for (i in res){
        app.innerText = res[i]
    }
}

getData(jsonData);

