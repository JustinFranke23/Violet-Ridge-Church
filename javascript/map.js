//Map API will attempt to fix console error

var L = window.L

var map = L.map('map').setView([38.79462555473118, -84.6169389355239], 19);
L.tileLayer('https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=53c4f0644bmsh7a490ca7886f56ep180f41jsnac2c5504b031', {
attribution: 'Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 19
}).addTo(map);