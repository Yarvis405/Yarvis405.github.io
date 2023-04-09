const app = document.querySelector("#app")

const getData = async () => {
    let data = await fetch('./data.json');
    let res = await data.json();
    
    res.players.forEach(i => {
        app.innerText = i
    });
}

getData();

