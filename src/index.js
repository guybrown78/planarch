import style from "./_scss/main.scss";
import navigation from './js/navigation';
import projectsCategory from './js/projectsCategory';
import projectItem from './js/projectItem';
import contactPage from './js/contactPage';

//
import smoothscroll from 'smoothscroll-polyfill';
 
function init() {
	// initialise js
	const nav = new navigation();

	// kick off the polyfill!
	smoothscroll.polyfill();
	// get the scrollToTopButton
	const scrollToTopButton = document.getElementById("js-scroll-up");
	// read the curent path
	const pageHeaderEL = document.getElementById("js-page-header");
	const currentPath = pageHeaderEL.dataset.currentpath;
	//
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function(event) {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			scrollToTopButton.style.display = "block";
		} else {
			scrollToTopButton.style.display = "none";
		}
	};
  // When the user clicks on the button, scroll to the top of the document
	scrollToTopButton.addEventListener("click", function(event) {
		// document.body.scrollTop = 0; // For Safari
		// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	});
	// 
	// actions dependant on currentPath
	let currentPageScript = null;
	if(currentPath === "projects-category"){
		// add projects-category scripts
		currentPageScript = new projectsCategory();
		return;
	}
	if(currentPath === "project-item"){
		// add project-citem scripts
		currentPageScript = new projectItem();
		return;
	}
	if(currentPath === "about"){
		// add aboutPage scripts
		currentPageScript = new aboutPage();
		return;
	}
	if(currentPath === "contact"){
		// add aboutPage scripts
		currentPageScript = new contactPage();
		return;
	}
}

init();
