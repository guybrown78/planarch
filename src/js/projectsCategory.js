import React from "react";
import ReactDOM from "react-dom";
import ProjectsData from "./models/Projects";
import ProjectCategoryItems from './components/ProjectCategoryItems'



function projectsCategory(){
  // get and set page parameters from query string
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('c');
  // set generic page content (titles etc...)
  const titleEL = document.getElementById("js-project-category-title");
  const currentBreadcrumbEL = document.getElementById("js-project-category-current-bc");
  //
  titleEL.innerHTML = `${currentCategory} projects`.toUpperCase();
  currentBreadcrumbEL.innerHTML = `${currentCategory} Projects`;
  console.log(currentCategory);
  // set main content
  // get data
  const categoriesCardData = ProjectsData.find(cat => cat.category === currentCategory).cards;
  // get DOM element
  const wrapperEL = document.getElementById("js-category-items");
  // go
  ReactDOM.render(<ProjectCategoryItems cards={categoriesCardData} category={currentCategory} />, wrapperEL);
}

export default projectsCategory