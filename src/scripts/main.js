// import "./theme.js"
import {nav, btnHome, btnServices, btnAds, btnAbout} from "./nav.js";

//navigation

nav()

btnHome.addEventListener("click", () => {
	nav(0)
})
btnServices.addEventListener("click", () => {
	nav(1) 

})
btnAds.addEventListener("click", () => {
	nav(2) 
})
btnAbout.addEventListener("click", () => {
	nav(3) 
})

//---------------------------------------------------------









