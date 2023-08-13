import {advertisementConstruct} from './js/data.js';

let ads = advertisementConstruct();
console.log(ads[0].offer.type);

const selectType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      return 'Любой тип жилья';
  }
}

let select = selectType(ads);
console.log(ads[5].offer.description);

