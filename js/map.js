import '../leaflet/leaflet.js';
import {enabledForms} from './toggle-active-form.js';
import {housingTypeSelection} from './form-ad.js';
import {advertisementConstruct} from './data.js';

const ads = advertisementConstruct();
let map = document.querySelector('.map__canvas');

map.setAttribute('disabled', 'disabled');

map = L.map('map-canvas')
  .on('load', () => {
    map.removeAttribute('disabled', 'disabled');
    enabledForms();
  })
  .setView({
    lat: 35.65000, lng: 139.70000,
  }, 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
},).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg', iconSize: [52, 52], iconAnchor: [26, 52],
});

const mainMarker = L.marker({
  lat: 35.65000, lng: 139.70000,
}, {
  icon: mainPinIcon, draggable: true,
},);

const address = document.querySelector('#address');
mainMarker.on('move', () => {
  address.setAttribute('readonly', 'readonly');
  address.value = 'широта ' + (mainMarker._latlng.lat).toFixed(5) + ', ' + 'долгота ' + (mainMarker._latlng.lng).toFixed(5);
});

mainMarker.addTo(map);

/*const createFeaturesList = (featuresArray) => {
  for (let i = 0; i <= featuresArray - 1; i++) {
    let featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature--' + featuresArray.offer.features[i]);
    console.log(featureItem);
    return featureItem;

  let featuresList = document.createElement('ul');
  featuresList.classList.add('popup__features');
    featuresList.appendChild(featureItem);
    console.log(featuresList);
  return featuresList;
};
createFeaturesList(createFeaturesItem(ads[0].offer.features));*/

ads.forEach((ad) => {
  const createFeaturesList = (featuresArray) => {
    featuresArray.offer.features.forEach((feature) => {
      let featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature--' + feature);
    });
  };
  const createCustomPopup = ({avatar, address, title, price, type, rooms, guests, checkin, checkout, features, description}) =>
    `<article class="popup">
      <img src="${ad.author.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">${ad.offer.title}</h3>
      <p class="popup__text popup__text--address">${ad.offer.address}</p>
      <p class="popup__text popup__text--price">${ad.offer.price} <span>₽/ночь</span></p>
      <h4 class="popup__type">${ad.offer.type}</h4>
      <p class="popup__text popup__text--capacity">${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей</p>
      <p class="popup__text popup__text--time">Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}</p>
      <ul class="popup__features">
      <script>
      createFeaturesList(ad.offer.features);
      </script>
<!--
        <li class="popup__feature popup__feature&#45;&#45;wifi"></li>
        <li class="popup__feature popup__feature&#45;&#45;dishwasher"></li>
        <li class="popup__feature popup__feature&#45;&#45;parking"></li>
        <li class="popup__feature popup__feature&#45;&#45;washer"></li>
        <li class="popup__feature popup__feature&#45;&#45;elevator"></li>
        <li class="popup__feature popup__feature&#45;&#45;conditioner"></li>-->
      </ul>
      <p class="popup__description">${ad.offer.description}</p>
      <div class="popup__photos">
        <img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">
      </div>
    </article>`;

  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat: ad.location.lat, lng: ad.location.lng,
  }, {
    icon,
  },);

  marker
    .addTo(map)
    .bindPopup(createCustomPopup(ad));
});
