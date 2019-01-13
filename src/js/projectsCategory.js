import React from "react";
import ReactDOM from "react-dom";
import ProjectsData from "./models/Projects";
import ProjectCategoryItems from './components/ProjectCategoryItems'
// import ProjectItemModal from './components/ProjectItemModal'


// get and set page parameters from query string
const urlParams = new URLSearchParams(window.location.search);
const currentCategory = urlParams.get('c');
// get data
const categoriesData = ProjectsData.find(cat => cat.category === currentCategory);
//
function projectsCategory(){
  initialisePage();
  // set main content
  // get DOM elements
  const itemsEL = document.getElementById("js-category-items");
  //const projectItemEL = document.getElementById("js-project-item");
  // add react components
  // cards
  ReactDOM.render(<ProjectCategoryItems 
    cards={categoriesData.cards} 
    category={currentCategory}
    onCardClicked={(id) => onCardClicked(id)}
  />, itemsEL);
  // modal popup
  // ReactDOM.render(<ProjectItemModal 
  // />, projectItemEL);
}

// function onCardClicked(id){
//   console.log(`here i am ${id}`);
//   initialiseItem(id);
// }

function initialisePage(){
   // set generic page content (titles etc...)
   const titleEL = document.getElementById("js-page-hero-title");
   const currentBreadcrumbEL = document.getElementById("js-current-breadcrumb");
   titleEL.innerHTML = `${currentCategory} projects`.toUpperCase();
   currentBreadcrumbEL.innerHTML = `${currentCategory} Projects`;
}

// function initialiseItem(id){
//   ProjectItemModal.onOpenModal();
// }
export default projectsCategory