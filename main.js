"use strict";
import players from 'data.json' assert{type: 'json'}

alert(stringify.JSON(players));

const view = document.getElementById("#app").innerHTML = stringify.JSON(players);