// Случайное ЦЕЛОЕ число, num знаков после запятой
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1)) + min);
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

export {getRandomInt, getRandomFloat, getRandomElementArr};
