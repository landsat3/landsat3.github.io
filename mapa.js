// Creamos un objeto mapa con la biblioteca Leaflet
var map = L.map('map').setView([-10.00, -75.00], 6);

// Creamos una capa de mapa base con OpenStreetMap y la agregamos al mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Crea una nueva capa geoJSON y la agrega al mapa
var myLayer = L.geoJSON().addTo(map);

// Carga los datos GeoJSON desde un archivo y los agrega a la capa
$.getJSON("E:/Agrorural/GJ/Pastos_Z18.geojson", function(data) {
  myLayer.addData(data);
});

$.getJSON("E:/Agrorural/GJ/Pastos_Z19.geojson", function(data) {
  myLayer.addData(data);
});
