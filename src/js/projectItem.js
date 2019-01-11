import React from "react";
import ReactDOM from "react-dom";
import ProjectsData from "./models/Projects";
//import ProjectCategoryItems from './components/ProjectCategoryItems'



function projectItem(){
  // get and set page parameters from query string
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('c');
  const currentItemId = urlParams.get('id');
  // set generic page content (titles etc...)
  const titleEL = document.getElementById("js-page-hero-title");
  const currentBreadcrumbEL = document.getElementById("js-current-breadcrumb");
  //
  // get data
  const categoriesCardData = ProjectsData.find(cat => cat.category === currentCategory).cards;
  const itemData = categoriesCardData.find(item => item.id === currentItemId);
  //
  titleEL.innerHTML = `${itemData.title}`.toUpperCase();
  currentBreadcrumbEL.innerHTML = `${itemData.title}`;
  console.log(currentCategory);
  // set main content
  // get DOM element
  const wrapperEL = document.getElementById("js-category-items");
  // go
  //ReactDOM.render(<ProjectCategoryItems cards={categoriesCardData} category={currentCategory} />, wrapperEL);
}

export default projectItem