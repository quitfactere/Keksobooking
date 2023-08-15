import {advertisementConstruct} from './js/data.js';
const housingTypeSelection = () => {
  const housingType = document.querySelector('#type');

  housingType.addEventListener('change', function () {
    switch (type.value) {
      case ('flat'):
        return 'Квартира';
      case ('bungalow'):
        return 'Бунгало';
      case ('house'):
        return 'Дом';
      case ('palace'):
        return 'Дворец';
    }
  })
}
housingTypeSelection();
console.log(type);
