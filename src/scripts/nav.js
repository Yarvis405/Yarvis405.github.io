// section layers
let home = document.querySelector("#home")
let services = document.querySelector("#services")
let ads = document.querySelector("#ads")
let about = document.querySelector("#about")
let title = document.querySelector("#title")

// buttons
let btnHome = document.querySelector("#btnHome")
let btnServices = document.querySelector("#btnServices")
let btnAds = document.querySelector("#btnAds")
let btnAbout = document.querySelector("#btnAbout")

export let btn = { btnHome, btnServices, btnAds, btnAbout}
// export let section = 0

export const nav = (section) => {

	switch(section){
		case 0:
			title.innerHTML = "Yarvis405 - Home";
			services.style.display = "none";
			ads.style.display = "none";
			about.style.display = "none";
			break

		case 1:
			title.innerHTML = "Yarvis405 - Services";
			home.style.display = "none";
			ads.style.display = "none";
			about.style.display = "none";
			break

		case 2:
			title.innerHTML = "Yarvis405 - Ads";
			services.style.display = "none";
			home.style.display = "none";
			about.style.display = "none";
			break

		case 3:
			title.innerHTML = "Yarvis405 - About";
			services.style.display = "none";
			ads.style.display = "none";
			home.style.display = "none";
			break


		default:
			title.innerHTML = "Yarvis405 - Home";
			services.style.display = "none";
			ads.style.display = "none";
			about.style.display = "none";
		break
	}
}



