// Задание 2.
// Написать функцию sum, которая может быть исполнена любое количество раз с не undefined аргументом.
// Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.
// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

const sum = function (num) {
  return function (innerNum) {
    if (innerNum) {
      return sum(num + innerNum);
    }
    return num;
  };
};

console.log(sum(1)(2)(3)(8)());
