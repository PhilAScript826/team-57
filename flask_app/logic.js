// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: "mapbox/streets-v11",
accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var request = new XMLHttpRequest();
request.open("GET", "../bk_lat-lon.json", false);
request.send(null)
var mydata = JSON.parse(request.responseText)['data'];
console.log(mydata);

/* var cities = [{
location: [40.7128, -74.0059],
name: "New York",
population: "8,550,405"
},
{
location: [41.8781, -87.6298],
name: "Chicago",
population: "2,720,546"
},
{
location: [29.7604, -95.3698],
name: "Houston",
population: "2,296,224"
},
{
location: [34.0522, -118.2437],
name: "Los Angeles",
population: "3,971,883"
},
{
location: [41.2524, -95.9980],
name: "Omaha",
population: "446,599"
}
]; */

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < mydata.length; i++) {
    var city = mydata[i];
    L.marker(city.lat_long)
    .bindPopup("<h1> Company Name:" + city['Company Name'] + "</h1>")
    .addTo(myMap);

    L.circle(city.lat_long, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 700
    }).addTo(myMap);

}


//-----------------------------------------------------------------------

// Leaflet Tutorial

// Create map
/* var mymap = L.map('map').setView([51.505, -0.09], 13); */

//add marker and add to map
/* var marker = L.marker([51.5, -0.09]).addTo(mymap); */

// Add circle and add to map
/* var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap); */

// Add polygon to tile layer
/* var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap); */

// Add popups
//marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
/* circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon."); */

// Alternative to the above popup methods when you need more interactivity
/* var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap); */

/* function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick); */

/* var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick); */

// Add mapbox streets tile layer
/* L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap); */