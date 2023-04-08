const app = document.querySelector("#app")

const getData = async () => {
    data = await fetch('./data.json');
    res = await data.json();
    return `${JSON.stringify(res)} && ${res.players.nick}`;
}

app.innerText = getData()