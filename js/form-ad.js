import {card} from './generator-DOM.js';

const housingTypeSelection = () => {
  const housingType = document.querySelector('#type');

  type.addEventListener('change', function () {
    switch (type.value) {
      case ('bungalow'):
        document.querySelector('#price').placeholder = '0';
        document.querySelector('#price').min = '0';
        return card.querySelector('.popup__type').textContent = 'Бунгало';
      case ('flat'):
        document.querySelector('#price').placeholder = '1000';
        document.querySelector('#price').min = '1000';
        return card.querySelector('.popup__type').textContent = 'Квартира';
      case ('hotel'):
        document.querySelector('#price').placeholder = '3000';
        document.querySelector('#price').min = '3000';
        return card.querySelector('.popup__type').textContent = 'Отель';
      case ('house'):
        document.querySelector('#price').placeholder = '5000';
        document.querySelector('#price').min = '5000';
        return card.querySelector('.popup__type').textContent = 'Дом';
      case ('palace'):
        document.querySelector('#price').placeholder = '10000';
        document.querySelector('#price').min = '1000';
        return card.querySelector('.popup__type').textContent = 'Дворец';
    }
  })
}

timein.addEventListener('change', function () {
  switch (timein.value) {
    case ('12:00'):
      return timeout.value = '12:00';
    case ('13:00'):
      return timeout.value = '13:00';
    case ('14:00'):
      return timeout.value = '14:00';
  }
})

export {housingTypeSelection};
