// import "./theme.js"
import {nav, btn} from "./nav.js";

btn[0].addEventListener("click", () => {
	nav(0) 
})
btn[1].addEventListener("click", () => {
	nav(1) 
})
btn[2].addEventListener("click", () => {
	nav(2) 
})
btn[3].addEventListener("click", () => {
	nav(3) 
})

nav(null)

/*
function select(){
	for(let i = 0; i < btn.length; i++){
		btn[i].addEventListener("click", () => {
			nav(1) 
			console.log(i)
		})
	}
}

document.addEventListener("click", select())
*/








