const getRandomInt = (min, max, num) => {
  if(min < 0 || max < 0) {
    return -1;
  }

  if(max < min) {
    [min, max] = [max, min];
  }

  return (Math.random(min, max) * (max - min + 1) + min).toFixed(num);
}

console.log(getRandomInt(0, 10, 5));
