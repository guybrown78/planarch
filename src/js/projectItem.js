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
  initialisePage(categoriesData, itemData);
  // set main content
  const carouselEL = document.getElementById("js-project-item-carousel");

  if(itemData == null){
    carouselEL.innerHTML = `<div class="no-data-msg"><p>Sorry, the data for this item is currently unavailable. Please select another <a href="./projects-category.html?c=${currentCategory}">item</a> from the ${categoriesData.displayName} category</p></div>`;
    return;
  }

  ReactDOM.render(<ProjectItemCarousel 
    category={currentCategory}
    details={itemData}
  />, carouselEL);
  const infoEL = document.getElementById("js-project-item-info");
  ReactDOM.render(<ProjectItemInfo 
    details={itemData}
  />, infoEL);
}

function initialisePage(categoriesData, itemData){
  // set generic page content (titles etc...)
  const titleEL = document.getElementById("js-page-hero-title");
  const currentBreadcrumbEL = document.getElementById("js-current-breadcrumb");
  const parentBreadcrumbEL = document.getElementById("js-parent-breadcrumb");
  const parentBreadcrumbURL = parentBreadcrumbEL.getAttribute('href');
 
  parentBreadcrumbEL.innerHTML = `
    <i class="fas fa-arrow-circle-right"></i>
    <span>${categoriesData.displayName}</span>
    `;
  parentBreadcrumbEL.setAttribute('href', `${parentBreadcrumbURL}?c=${currentCategory}`)

  if(itemData == null){
    return;
  }

  titleEL.innerHTML = `${itemData.title}`.toUpperCase();
  currentBreadcrumbEL.innerHTML = `
    <i class="far fa-arrow-alt-circle-right"></i>
    <span>${itemData.title}</span>
  `;
}

export default projectItem