let usersByDay = [812, 1360, 657, 1247, 165];
console.log(usersByDay);

for (let i = 0; i <= usersByDay.length - 2; i++) { // перебираем, чтобы записывать "предыдущие" элементы в minValue
  let minValue = usersByDay[i]; // первый элемент записываем в "минимальную переменную"

  for (let j = i + 1; j <= usersByDay.length - 1; j++) { // перебираем, чтобы сравнить "последующие" элементы
    if (usersByDay[j] < minValue) { // если "последующий" элемент меньше минимальной переменной
      minValue = usersByDay[j]; // в минимальную ппеременную записываем "последующий" элемент
      let swap = usersByDay[i]; // сохраняем значение "предыдущего" элемента
      usersByDay[i] = minValue;  // на место "предыдущего" элемента записываем "последующий" элемент, если он меньше
      usersByDay[j] = swap;
    }
  }
}

console.log(usersByDay);
