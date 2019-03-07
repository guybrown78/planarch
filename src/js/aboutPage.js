import React from "react";
import ReactDOM from "react-dom";
import ClientTestimonialsCarousel from "./components/ClientTestimonialsCarousel";


function aboutPage(){
  initialisePage();
  // set main content
  const testimonialsEL = document.getElementById("js-client-testimonials");
  ReactDOM.render(<ClientTestimonialsCarousel 
		showThumbs={false} 
		autoPlay={true} 
		interval={2500} 
		showArrows={false} 
		showStatus={false} 
		infiniteLoop={true} 
		showIndicators={false} 
		axis={"horizontal"} 
		dynamicHeight={true}
	/>, testimonialsEL);
}

function initialisePage(){
  return;
}

export default aboutPage