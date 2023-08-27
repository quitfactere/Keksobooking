import '../leaflet/leaflet.js';
import {ads, card, renderCard} from './ad-generator.js'
import {enabledForms} from './toggle-active-form.js';

let map = document.querySelector('.map__canvas');

map.setAttribute('disabled', 'disabled');

map = L.map('map-canvas')
  .on('load', () => {
    map.removeAttribute('disabled', 'disabled');
    enabledForms();
  })
  .setView({
    lat: 35.65000,
    lng: 139.70000,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker({
    lat: 35.65000,
    lng: 139.70000,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
);

const address = document.querySelector('#address');
mainMarker.on('moveend', () => {
  address.setAttribute('readonly', 'readonly');
  address.value = 'широта ' + (mainMarker._latlng.lat).toFixed(5)
    + ', ' + 'долгота ' + (mainMarker._latlng.lng).toFixed(5);
});

mainMarker.addTo(map);

ads.forEach((ad) => {
  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
      lat: ad.location.lat,
      lng: ad.location.lng,
    },
    {
      icon,
    },
  );
  console.log(ad);
  marker
    .addTo(map)
    .bindPopup(renderCard(ad));
});
