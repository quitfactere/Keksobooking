// Случайное ЦЕЛОЕ число, num знаков после запятой
const getRandomInt = (min, max, num) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1)) + min).toFixed(num);
};

// Случайное число С ПЛАВАЮЩЕЙ ТОЧКОЙ, num знаков после запятой
const getRandomFloat = (min, max, num) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }

  return (Math.random() * (max - min) + min).toFixed(num);
};

// Случайный элемент массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

const titles = ['Милая, уютная квартирка в центре Токио', 'Современная студия рядом с центром в Гамбурге', 'Квартира в стиле модерн рядом с Дворцовой площадью Санкт-Петербурга', 'Дворец на Елисейских полях', 'Бунгало в Рио-де-Жанейро', 'Дом на Трафальгар сквер',];

const types = ['palace', 'flat', 'house', 'bungalow',];

const checkin = ['12:00', '13:00', '14:00',];
const checkout = ['12:00', '13:00', '14:00',];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

let description = 'Отличное помещение';

const images = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg',];

const ADVERTISEMENT_COUNT = 10;

// let advertisements = [];

let imageIndex = 1;

// Определяет и записывает в новый массив случайное количество features
const getFeatures = () => {
  let featuresCount = 0;
  let featuresSelect = [];
  for (let i = 0; i <= getRandomInt(features.length - (features.length - 1), features.length); i++) {
    featuresCount = i;
    featuresSelect[i] = features[i];
  }
  return featuresSelect;
}

const photoHouse = () => {
  let photos = [];
  for (let i = 1; i <= getRandomInt(images.length - (images.length - 1), images.length); i++) {
    photos.push(getRandomElementArr(images));
  }
  return photos;
};

let coordinates = () => {
  let location = [];
  location.push({
    x: getRandomFloat(35.65000, 35.70000, 5), y: getRandomFloat(139.70000, 139.75000, 5),
  });
  return location;
};

const addOffers = () => {
  let offer = [];
  offer.push({
    title: getRandomElementArr(titles),
    adress: 'долгота: ' + getRandomInt(0, 180, 2) + ', широта: ' + getRandomInt(0, 90, 2),
    price: getRandomInt(100, 5000),
    type: getRandomElementArr(types),
    guests: getRandomInt(1, 5),
    checkin: getRandomElementArr(checkin),
    checkout: getRandomElementArr(checkout),
    features: getFeatures(),
    description: description,
    photos: photoHouse(),
  });
  return offer;
};

const addAdvertisement = () => {
  for (let i = 0; i < ADVERTISEMENT_COUNT; i++) {
    advertisements.push({
      author: ({avatar: 'img/avatars/user' + String(imageIndex).padStart(2, '0') + '.png'}), offer: addOffers(), location: coordinates()
    })
    imageIndex++;
  }
    return advertisements;
};

console.log(addAdvertisement());
