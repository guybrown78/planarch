import React from "react";
import ReactDOM from "react-dom";
import ProjectsData from "./models/Projects";
import ProjectItemModal from './components/ProjectItemModal'

function projectItem(){
  // get and set page parameters from query string
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('c');
  const currentItemId = urlParams.get('id');
  // set generic page content (titles etc...)
  const titleEL = document.getElementById("js-page-hero-title");
  const currentBreadcrumbEL = document.getElementById("js-current-breadcrumb");
  const parentBreadcrumbEL = document.getElementById("js-parent-breadcrumb");
  //
  // get data
  const categoriesCardData = ProjectsData.find(cat => cat.category === currentCategory).cards;
  const itemData = categoriesCardData.find(item => item.id === currentItemId);
  //
  titleEL.innerHTML = `${itemData.title}`.toUpperCase();
  parentBreadcrumbEL.innerHTML = `${currentCategory} Projects`;
  const parentBreadcrumbURL = parentBreadcrumbEL.getAttribute('href');
  parentBreadcrumbEL.setAttribute('href', `${parentBreadcrumbURL}?c=${currentCategory}`)
  currentBreadcrumbEL.innerHTML = `${itemData.title}`;
  // set main content
  // get DOM element
  console.log("kkkk")
  const wrapperEL = document.getElementById("js-project-item");
  // go
  console.log(wrapperEL);
  ReactDOM.render(<ProjectItemModal />, wrapperEL);

}

export default projectItem