function navigation(){
  //let pageHeader = document.getElementById("js-page-header");
  let navbar = document.getElementById("js-navbar");
	let mainNav = document.getElementById("js-nav");
	let pageHero = document.getElementById("js-pagehero");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  // 
	navBarToggle.addEventListener("click", function(event) {
		navbar.classList.toggle("navbar-active");
		mainNav.classList.toggle("nav-active");
		pageHero.classList.toggle("set-back");
  });
  
}

export default navigation