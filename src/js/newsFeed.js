import axios from 'axios';

function newsFeed(){
  //initialisePage();
  // set main content
  //const mapEL = document.getElementById("js-planarch-map");
  console.log('news feed ...');
  axios
  .get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  })
  .then(res => {
      console.log(res);
  })
  .catch(console.error);
}

function initialisePage(){
  return;
}

export default newsFeed