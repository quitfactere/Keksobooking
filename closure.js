/*
import {getRandomInt} from './js/util.js';
import {get} from 'browser-sync';
/!*
  ЗАДАЧА:
  Напишите функцию, каждый вызов который будет генерировать случайные числа
  в переданном диапазоне, но так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*!/
const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.log('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getUniqueRandomInteger = makeUniqueRandomIntegerGenerator(1, 3);
console.log(getUniqueRandomInteger());
console.log(getUniqueRandomInteger());
console.log(getUniqueRandomInteger());
console.log('-----------------------');

const getAnotherUniqueRandomInteger = makeUniqueRandomIntegerGenerator(2, 4);

console.log(getAnotherUniqueRandomInteger());
console.log(getAnotherUniqueRandomInteger());
console.log(getAnotherUniqueRandomInteger());
*/

const createSecretStorage = () => {
  const secrets = [];
  return (secret) => {
    secrets.push(secret);
  }
};

const saveSecret = createSecretStorage();
saveSecret('Совы не то, чем кажутся');
console.log(secrets);
