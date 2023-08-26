import {getRandomElementArr, getRandomFloat, getRandomInt} from './util.js';

const titles = ['Милая, уютная квартирка в центре Токио', 'Современная студия рядом с центром в Гамбурге', 'Квартира в стиле модерн рядом с Дворцовой площадью Санкт-Петербурга', 'Дворец на Елисейских полях', 'Бунгало в Рио-де-Жанейро', 'Дом на Трафальгар сквер'];

const types = ['palace', 'flat', 'house', 'bungalow'];

const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

let description = 'Отличное помещение';

const images = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const ADVERTISEMENT_COUNT = 10;

let advertisements = [];

let imageIndex = 1;

// Определяет и записывает в новый массив случайное количество features
const getFeatures = () => {
  let featuresCount = 0;
  let featuresSelect = [];
  for (let i = 0; i <= getRandomInt(features.length - features.length, features.length - 1); i++) {
    featuresCount = i;
    featuresSelect[i] = features[i];
  }
  return featuresSelect;
}

const photoHouse = () => {
  let photos = [];
  for (let i = 1; i <= getRandomInt(images.length - (images.length - 1), images.length); i++) {
    let currentPhoto = getRandomElementArr(images);
    while (photos.includes(currentPhoto)) {
      currentPhoto = getRandomElementArr(images);
    }
    photos.push(currentPhoto);
  }
  return photos;
}

let getCoordinates = () => {
  let location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.75000, 5),
  };
  return location;
};

const addOffers = function () {
  let offer = {
    title: getRandomElementArr(titles),
    address: 'долгота: ' + getCoordinates().lat + ', широта: ' + getCoordinates().lng,
    price: getRandomInt(100, 5000),
    type: getRandomElementArr(types),
    rooms: getRandomInt(1, 3),
    guests: getRandomInt(1, 5),
    checkin: getRandomElementArr(checkin),
    checkout: getRandomElementArr(checkout),
    features: getFeatures(),
    description: description,
    photos: photoHouse(),
  };
  return offer;
};

const advertisementConstruct = function () {
  for (let i = 0; i < ADVERTISEMENT_COUNT; i++) {
    advertisements.push({
      author: ({avatar: 'img/avatars/user' + String(imageIndex).padStart(2, '0') + '.png'}),
      offer: addOffers(),
      location: getCoordinates()
    })
    imageIndex++;
  }
  return advertisements;
};

export {advertisementConstruct};
