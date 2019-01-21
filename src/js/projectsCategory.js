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
  if(categoriesData.cards.length <= 0){
    itemsEL.innerHTML = `<div class="no-data-msg"><p>There are currently no items for this category. Please select another <a href="./projects.html">category</a></p></div>`;
    return;
  }
  //const projectItemEL = document.getElementById("js-project-item");
  // add react components
  // cards
  ReactDOM.render(<ProjectCategoryItems 
    cards={categoriesData.cards} 
    category={currentCategory}
    categoryDisplayName={categoriesData.displayName}
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
   titleEL.innerHTML = `${categoriesData.displayName}`.toUpperCase();
   currentBreadcrumbEL.innerHTML = `
    <i class="far fa-arrow-alt-circle-right"></i>
    <span>${categoriesData.displayName}</span>
   `;
}

// function initialiseItem(id){
//   ProjectItemModal.onOpenModal();
// }
export default projectsCategory