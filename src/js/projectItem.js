import React from "react";
import ReactDOM from "react-dom";
import ProjectsData from "./models/Projects";
import ProjectItemCarousel from './components/ProjectItemCarousel'

// get and set page parameters from query string
const urlParams = new URLSearchParams(window.location.search);
const currentCategory = urlParams.get('c');
const currentItemId = urlParams.get('id');
// get data
const categoriesData = ProjectsData.find(cat => cat.category === currentCategory);
const itemData = categoriesData.cards.find(item => item.id === currentItemId);
//

function projectItem(){
  initialisePage();
  // set main content
  const wrapperEL = document.getElementById("js-project-item");
  ReactDOM.render(<ProjectItemCarousel 
    category={currentCategory}
    details={itemData}
  />, wrapperEL);
}

function initialisePage(){
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