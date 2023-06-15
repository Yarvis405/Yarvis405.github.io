// import "./theme.js"
import {nav, btnHome, btnServices, btnAds, btnAbout} from "./nav.js";

nav(null);

btnHome.addEventListener("click", () => {
	nav(0) 
});

btnServices.addEventListener("click", () => {
	nav(1) 
});

btnAds.addEventListener("click", () => {
	nav(2) 
});

btnAbout.addEventListener("click", () => {
	nav(3) 
});

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








