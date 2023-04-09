const app = document.querySelector("#app")
const jsonData = "https://jsonplaceholder.typicode.com/users"

const getData = async (file) => {
    let data = await fetch(file);
    let res = await data.json();
    
    for (const key in res) {
        if (res.hasOwnProperty.call(res, key)) {
            const element = res[key];
            app.innerText = element;
            
        }
    }
}

getData(jsonData);

