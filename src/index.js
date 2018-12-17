import style from "./_scss/main.scss";
//
function f() {
	let x = "scoped not hoisted !!!!!!!";
	{
		// okay, block scoped name
		const x = "sneaky";
	}

	console.log(x);
	//
	//let pageHeader = document.getElementById("js-page-header");
	let navbar = document.getElementById("js-navbar");
	let mainNav = document.getElementById("js-nav");
	let pageHero = document.getElementById("js-pagehero");
	let navBarToggle = document.getElementById("js-navbar-toggle");

	navBarToggle.addEventListener("click", function() {
		navbar.classList.toggle("navbar-active");
		mainNav.classList.toggle("nav-active");
		pageHero.classList.toggle("set-back");
	});
	//
	//pageHeader.style.height = 600 + 'px';
	//navbar.style.height = 600 + 'px';
}

f();
