
function newsFeed(){
	
	const twitterTitleEL = document.getElementById("js-twitter-title");
	const twitterTimelineEL = document.getElementById("js-twitter-timeline");

	twitterTitleEL.addEventListener('click', function(){
      onGuideCardClicked(twitterTimelineEL, twitterTitleEL);
  	}, false);
};

function onGuideCardClicked(cardEL, btnEL){
	console.log("Clicked")
  if(cardEL.classList.contains("opened")){
		btnEL.classList.remove("opened");
    cardEL.classList.remove("opened");
  }else{
		btnEL.classList.add("opened");
    cardEL.classList.add("opened");
  }
}

export default newsFeed