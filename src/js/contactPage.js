

function aboutPage(){
  initialisePage();
  // set main content
  const mapEL = document.getElementById("js-planarch-map");
  initMap(mapEL);
}

function initialisePage(){
  return;
}

// Initialize and add the map
function initMap(mapEL) {
  // The location of Uluru

  var uluru = {
    lat: 54.664964, 
    lng: -1.673199
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    mapEL, {zoom: 12, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

export default aboutPage