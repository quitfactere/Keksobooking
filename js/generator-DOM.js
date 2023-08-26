import {advertisementConstruct} from './data.js';
import {housingTypeSelection} from './form-ad.js';

const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const card = popup.cloneNode(true);
const featuresList = card.querySelector('.popup__features');
const ads = advertisementConstruct();

//удаляет элементы списка удобств содержащиеся в шаблоне
const removeExistingFeatures = () => {
  const existingsFeatures = featuresList.querySelectorAll('.popup__feature');
  for (let i = 0; i < existingsFeatures.length; i++) {
    featuresList.removeChild(existingsFeatures[i]);
  }

  return existingsFeatures;
}
removeExistingFeatures();

// создаёт список удобств, из данных объявления
const featuresListCreate = () => {
  let features = [];
  //ads.forEach((ad) => {
  features = ads[0].offer.features;
  //});

  let featuresItem = document.createElement('li');

  featuresItem.classList.add('popup__feature');

  features.forEach((feature) => {
    featuresItem.classList.add('popup__feature--' + feature);
    featuresList.append(featuresItem.cloneNode(true));
    featuresItem.classList.remove('popup__feature--' + feature);
  });

  return featuresList;
}
//console.log(ads[0].offer.photos);
const addPhoto = () => {
  const imageContainer = card.querySelector('.popup__photos');
  const existingImgElement = imageContainer.querySelector('img');
  const image = document.createElement('img');
  const photos = ads[0].offer.photos;
  imageContainer.removeChild(existingImgElement);
  photos.forEach((photo) => {
    image.src = photo;
    image.classList.add('popup__photo');
    image.width = 45;
    image.height = 40;
    image.alt = 'Фотография жилья';
    imageContainer.append(image.cloneNode(true));
  })

  return imageContainer;
}

const renderCard = ({ author: { avatar: avatar},
  offer: {address: address, title: title,
    price: price, rooms: rooms, guests: guests, checkin: checkin,
    checkout: checkout, description: description}
}) => {

  card.querySelector('.popup__title').textContent = title;
  card.querySelector('.popup__text--address').textContent = address;
  card.querySelector('.popup__text--price').textContent = price + ' ₽/ночь';
  card.querySelector('.popup__type').textContent = housingTypeSelection();
  card.querySelector('.popup__text--capacity').textContent = rooms + ' комнаты для ' + guests + ' гостей';
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin + ' , выезд до ' + checkout;
  card.querySelector('.popup__features').insertAdjacentHTML = featuresListCreate();
  card.querySelector('.popup__description').textContent = description;
  card.querySelector('.popup__photo').src = addPhoto();
  card.querySelector('.popup__avatar').src = avatar;
  return card;
}
//console.log(card);
const renderCards = () => {
  let cardsListFragment = document.createDocumentFragment();
  //ads.forEach((ad) => {
  cardsListFragment.appendChild(renderCard(ads[1]));

  const cardElements = card.querySelectorAll('*');
  cardElements.forEach((elem) => {
    if (elem === undefined || '' || null) {
      elem.classList.add('visually-hidden');
    }
  })
  //mapCanvas.appendChild(cardsListFragment);
  //})
}



export {card, ads, renderCards};
