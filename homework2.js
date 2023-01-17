// Написать функцию
// promiseReduce(asyncFunctions, reduce, initialValue)
// asyncFunctions - массив асинхронных функций, возвращающих промис
// reduce(memo, value) - функция, которая будет вызвана для каждого успешно завершившегося промиса.
// initialValue - стартовое значение для функции reduce
// promiseReduce последовательно вызывает переданные асинхронные функции
// и выполняет reduce функцию сразу при получении результата до вызова следующей асинхронной функции. Функция promiseReduce должна возвращать промис с конечным результатом.

var fn1 = () => {
  console.log("fn1");
  return Promise.resolve(1);
};

var fn2 = () =>
  new Promise((resolve) => {
    console.log("fn2");
    setTimeout(() => resolve(2), 1000);
  });

async function promiseReduce(asyncFunctions, reduce, initialValue) {
  let acc = initialValue;
  for (const asyncFunction of asyncFunctions) {
    const result = await asyncFunction();
    acc = reduce(acc, result);
  }
  return acc;
}
promiseReduce(
  [fn1, fn2],
  function (memo, value) {
    console.log("reduce");
    return memo * value;
  },
  1
).then(console.log);
