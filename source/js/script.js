// Карта

function initMap() {
  var map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 18,
    center: { lat: 59.938731, lng: 30.323081 }
  });

  var image = "img/map-marker.png";
  var beachMarker = new google.maps.Marker({
    position: { lat: 59.938731, lng: 30.323081 },
    map: map,
    icon: image
  });
}
