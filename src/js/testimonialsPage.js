import React from "react";
import ReactDOM from "react-dom";
import ClientTestimonialsCarousel from "./components/ClientTestimonialsCarousel";


function testimonialsPage(){
  initialisePage();
  // set main content
  const testimonialsEL = document.getElementById("js-client-testimonials");
	ReactDOM.render(<ClientTestimonialsCarousel 
		showThumbs={false} 
		autoPlay={false} 
		interval={2500} 
		showArrows={true} 
		showStatus={false} 
		infiniteLoop={true} 
		showIndicators={true} 
		axis={"horizontal"} 
		dynamicHeight={false}
	/>, testimonialsEL);
}

function initialisePage(){
  return;
}

export default testimonialsPage