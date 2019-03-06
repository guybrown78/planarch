import React from "react";
import ReactDOM from "react-dom";
import ClientTestimonialsCarousel from "./components/ClientTestimonialsCarousel";


function testimonialsPage(){
  initialisePage();
  // set main content
  const testimonialsEL = document.getElementById("js-client-testimonials");
  ReactDOM.render(<ClientTestimonialsCarousel />, testimonialsEL);
}

function initialisePage(){
  return;
}

export default testimonialsPage