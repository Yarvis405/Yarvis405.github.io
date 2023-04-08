"use strict";
import players from 'data.json' assert{type: 'json'}

alert(players);

const view = document.getElementById("#app").innerHTML = players;