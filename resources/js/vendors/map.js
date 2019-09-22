
window.$ = window.jQuery = require('jquery');
var map;

function initMap() {
  if($('#map').length > 0 ) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 47.237117, lng: 39.594006},
      zoom: 13,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: false,
      disableDefaultUI: true
    });
    var marker = new google.maps.Marker({

      position: {lat:  47.237117, lng: 39.594006},

      map: map,
      title: 'Порошковая окраска'
    });
  }
}
$(document).ready(function () {
  initMap();
});
