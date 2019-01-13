import React from "react";
import ReactDOM from "react-dom";
import ProjectsData from "./models/Projects";
import ProjectItemCarousel from './components/ProjectItemCarousel'
import ProjectItemInfo from './components/ProjectItemInfo'

// get and set page parameters from query string
const urlParams = new URLSearchParams(window.location.search);
const currentCategory = urlParams.get('c');
const currentItemId = urlParams.get('id');

//

function projectItem(){
  // get data
  const categoriesData = ProjectsData.find(cat => cat.category === currentCategory);
  const itemData = categoriesData.cards.find(item => item.id === currentItemId);
  //
  initialisePage(itemData);
  // set main content
  const carouselEL = document.getElementById("js-project-item-carousel");
  ReactDOM.render(<ProjectItemCarousel 
    category={currentCategory}
    details={itemData}
  />, carouselEL);
  const infoEL = document.getElementById("js-project-item-info");
  ReactDOM.render(<ProjectItemInfo 
    details={itemData}
  />, infoEL);
}

function initialisePage(itemData){
  // set generic page content (titles etc...)
  const titleEL = document.getElementById("js-page-hero-title");
  const currentBreadcrumbEL = document.getElementById("js-current-breadcrumb");
  const parentBreadcrumbEL = document.getElementById("js-parent-breadcrumb");
  const parentBreadcrumbURL = parentBreadcrumbEL.getAttribute('href');
  titleEL.innerHTML = `${itemData.title}`.toUpperCase();
  parentBreadcrumbEL.innerHTML = `${currentCategory} Projects`;
  parentBreadcrumbEL.setAttribute('href', `${parentBreadcrumbURL}?c=${currentCategory}`)
  currentBreadcrumbEL.innerHTML = `${itemData.title}`;
}

export default projectItem