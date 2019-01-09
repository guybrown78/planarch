import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./components/container/FormContainer";

function projectsCategory(){
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('c');
  console.log(myParam);
}

export default projectsCategory