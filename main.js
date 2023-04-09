const app = document.querySelector("#app")

const getData = async () => {
    let data = await fetch('./data.json');
    let res = await data.json();
    
    for (i in res.players){
        app.innerText = res.players[i]
    }
}

getData();

