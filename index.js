// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([40.283677, -3.821508], 16);

$(document).ready(function(){
	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
// L.marker([40.283677, -3.821508]).addTo(map)
// .bindPopup('Aulario 3 URJC')
// .openPopup();
map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);


var popup = L.popup();
function onMapClick(e) {
	popup
	.setLatLng(e.latlng)
	.setContent(e.latlng.toString())
	.openOn(map);
}

map.on('click', onMapClick);
});

