import '../leaflet/leaflet.js';
console.log(L);
const map = L.map('map-canvas').setView({
  lat: 35.65000,
  lng: 139.70000,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
