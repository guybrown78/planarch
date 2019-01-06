import style from "./_scss/main.scss";
import navigation from './js/navigation';


function init() {
	// initialise js
	const nav = new navigation();

	//pageHeader.style.height = 600 + 'px';
	//navbar.style.height = 600 + 'px';
	// let screenSize = parseInt(style.screenSmallMaxWidth);
	// console.log(parseInt(style.screenSmallMaxWidth));
	// console.log(parseInt(style.screenMediumMinWidth));
	// console.log(parseInt(style.screenMediumMaxWidth));
	// console.log(parseInt(style.screenLargeMinWidth));
	// console.log(parseInt(style.screenLargeMaxWidth));
	// console.log(parseInt(style.screenXLargeMinWidth));

	// get the scrollToTopButton
	const scrollToTopButton = document.getElementById("js-scroll-up");
	
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
		document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}

init();
