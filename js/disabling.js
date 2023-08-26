const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const formArrayElements = Array.from(form.children);
const filtersArrayElements = Array.from(filters.children);

form.classList.add('ad-form--disabled');
filters.classList.add('ad-form--disabled');
formArrayElements.forEach((element) => {
  element.setAttribute('disabled', 'disabled');
})

filtersArrayElements.forEach((element) => {
  element.setAttribute('disabled', 'disabled');
})


