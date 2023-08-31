import {advertisementConstruct} from './data.js';
import {housingTypeSelection} from './form-ad.js';


const featuresList = card.querySelector('.popup__features');
const ads = advertisementConstruct();

//удаляет элементы списка удобств содержащиеся в шаблоне
/*const removeExistingFeatures = () => {
  const existingsFeatures = featuresList.querySelectorAll('.popup__feature');
  for (let i = 0; i < existingsFeatures.length; i++) {
    featuresList.removeChild(existingsFeatures[i]);
  }

  return existingsFeatures;
}
removeExistingFeatures();

// создаёт список удобств, из данных объявления
const featuresListCreate = (adsArray) => {
  let features = [];
  const featuresItem = document.createElement('li');
  featuresItem.classList.add('popup__feature');
  adsArray.forEach((adElement) => {
    features = adElement.offer.features;
  })

  features.forEach((feature) => {
    featuresItem.classList.add('popup__feature--' + feature);
    featuresList.append(featuresItem.cloneNode(true));
    featuresItem.classList.remove('popup__feature--' + feature);
  });

  return featuresList;
}

const addPhoto = (photoArray) => {
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
}*/

/*const {address, title, price, rooms, guests, checkin, checkout, features, description} = adItem;

card.querySelector('.popup__title').textContent = adItem.offer.title;
card.querySelector('.popup__text--address').textContent = adItem.offer.address;
card.querySelector('.popup__text--price').textContent = adItem.offer.price + ' ₽/ночь';
card.querySelector('.popup__type').textContent = 'types';
card.querySelector('.popup__text--capacity').textContent = adItem.offer.rooms + ' комнаты для ' + adItem.offer.guests + ' гостей';
card.querySelector('.popup__text--time').textContent = 'Заезд после ' + adItem.offer.checkin + ' , выезд до ' + adItem.offer.checkout;
card.querySelector('.popup__features').insertAdjacentHTML('afterbegin', featureItem);
card.querySelector('.popup__description').textContent = adItem.offer.description;
card.querySelector('.popup__photo').src = 'photo';
card.querySelector('.popup__avatar').src = adItem.offer.title;
return card;*/
}

/*const renderCards = (adsArray) => {
  const cardsListFragment = document.createDocumentFragment();
  adsArray.forEach((ad) => {
    cardsListFragment.appendChild(renderCard(ad));

  const cardElements = card.querySelectorAll('*');
    cardElements.forEach((elem) => {
      if (elem === undefined || '' || null) {
        elem.classList.add('visually-hidden');
      }
    })
    //console.log(ad);
    console.log(adsArray);
  })
    return cardsListFragment;
}*/

//export {card, ads, renderCard};
