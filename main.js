"use strict";
import players from 'data.json' assert{type: 'json'}

const view = document.querySelector("#app").innerHTML = () => {
    return(`
        <h2>players are equal to:</h2>
        ${players}
    `)
}