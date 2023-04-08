"use strict";
import players from './data.json' assert{type: 'json'}

alert(stringify.JSON(players));

const view = document.getElementById("#app").innerText = stringify.JSON(players);