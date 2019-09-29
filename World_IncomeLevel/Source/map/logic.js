// Create a map object
var myMap = L.map("map", {
  center: [20.0, 5.0],
  zoom: 3
});

var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < worldMapData.length; i++) {

  // Conditionals for countries points
  var color = "";
  
  if 
  (worldMapData[i].population > 500000000) {
    color = "red";
  }
  else if (worldMapData[i].population > 400000000) {
    color = "blue";
  }
  else if (worldMapData[i].population > 300000000) {
    color = "green";
  }
  else if (worldMapData[i].population > 200000000) {
    color = "purple";
  }
  else if (worldMapData[i].population > 100000000) {
    color = "yellow";
  }
  else {
    color = "black";
  }

  // Add circles to map
  L.circle([worldMapData[i].latitude,worldMapData[i].longitude], 
    {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: worldMapData[i].population / 1500
  }).bindPopup("<h1>" +  worldMapData[i].country_name + "</h1> <hr> <h3>Population: " + worldMapData[i].population + "</h3>").addTo(myMap);
}

var baseMaps = {
  //
  "light Map": lightmap
};

// Create an overlayMaps object to hold the countryno ("Bike Stations") layer
var overlayMaps = {
  //
  "Country Pop": worldMapData
};