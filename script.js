// Задание 2.
// Написать функцию sum, которая может быть исполнена любое количество раз с не undefined аргументом.
// Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.
// sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n

function sum(num) {
  let accum = num;

  function innerSum(innerNum = 0) {
    accum += innerNum;

    return innerSum;
  }

  innerSum.toString = function () {
    return accum;
  };

  return innerSum;
}

console.log(String(sum(1)(2)(3)(8)()(5))); //19
