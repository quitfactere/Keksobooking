const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const formArrayElements = Array.from(form.children);
const filtersArrayElements = Array.from(filters.children);

const disabledForms = () => {
  form.classList.add('ad-form--disabled');
  filters.classList.add('ad-form--disabled');
  formArrayElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  })

  filtersArrayElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  })
}

disabledForms();

const enabledForms = () => {
  form.classList.remove('ad-form--disabled');
  filters.classList.remove('ad-form--disabled');
  formArrayElements.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  })

  filtersArrayElements.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  })
}

export {enabledForms};
