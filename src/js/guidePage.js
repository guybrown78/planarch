

function guidePage(){
  initialisePage();
  // set main content
  const guideCards = document.querySelectorAll(".guide-card");
  guideCards.forEach(function (card, index) {
    card.addEventListener('click',function(){
      onGuideCardClicked(card);
  }, false);
});

}
function onGuideCardClicked(cardEL){
  if(cardEL.classList.contains("opened")){
    cardEL.classList.remove("opened");
  }else{
    cardEL.classList.add("opened");
  }
}
function initialisePage(){
  return;
}


export default guidePage