const app = document.querySelector("#app")

const getData = async () => {
    data = await fetch('./data.json');
    res = await data.json();
    
    app.innerText = `JSON.stringify(res)} && ${res.players.nick}`;
}

