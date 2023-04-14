console.log('Посчитать мышей'); 
// Зроби мені ще просту задачку:
// напиши функцію "countMouses(arr1, arr2)" яка буде приймати 2 різні за структурою масиви 
// та рахувати кількість мишей ('mouses') у них та повертати цю кількість

// Приклад різних масивів arr1 , arr2:
//  const mouses = ['mouse1', 'mouse2'];
//  const deepMouses = [
//   { name: 'Box1', mouses: ['mouse3', 'mouse4'] },
//   { name: 'Box2', mouses: ['mouse5'] },
//   { name: 'Box3', mouses: ['mouse6'] },
//  ];
// Те що повинно вийти:
// const counted = countMouses(mouses, deepMouses)   //  6

const mouses = ['mouse1', 'mouse2'];

const deepMouses = [
  { name: 'Box1', mouses: ['mouse3', 'mouse4'] },
  { name: 'Box2', mouses: ['mouse5'] },
  { name: 'Box3', mouses: ['mouse6'] },

];

function countMouses (arr1, arr2) {
    
  const arr1Length = arr1.length;

  const mappedArr2 = arr2.map(el => el.mouses);

  // let arr2Length = 0;

  // mappedArr2.forEach(el => {
  //     arr2Length = arr2Length + el.length
  // });

  const arr2Length = mappedArr2.reduce((accum, el) => accum + el.length, 0);

  return arr1Length + arr2Length;

}

const counted = countMouses(mouses, deepMouses);

console.log(`${counted} мышов`);

console.log('');
console.log('==============');
console.log('');


console.log('Фильтрация массива'); 
// Создайте функцию getSpecialNumbers, которая будет принимать массив чисел и возвращать отфильтрованный массив
// Основные требования:
// 1. Функция должна называться getSpecialNumbers
// 2. Функция должна отбросить все элементы исходного массива, которые не кратны 3. И вернуть массив из 
// элементов кратных 3-м
// 4. Исходный массив не должен поменяться

const getSpecialNumbersArr = [3, 5, 7, 8, 9, 81, 27];

function getSpecialNumbers(arr) {
  return arr.filter(el => (el % 3 == 0));
}

console.log(getSpecialNumbers(getSpecialNumbersArr));
console.log(getSpecialNumbersArr, 'исходный массив');

console.log('');
console.log('==============');
console.log('');

console.log('Sort массива'); 
// Создайте функцию sortDesc, которая будет сортировать переданный массив чисел по убыванию
// Основные требования:
// 1. Функция должна называться sortDesc
// 2. Функция должна отсортировать исходный массив в порядке убывания
// 3. Исходный массив не должен измениться

const sortDescArr = [7, 20, 34, 56, 72, 3, 11];

function compare(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

function sortDesc(arr) {
  // const newArr = arr.map(el => el);
  const arrCopy = [...arr];

  return arrCopy.sort(compare);
}

console.log(sortDesc(sortDescArr));
console.log(sortDescArr, 'исходный массив');


console.log('');
console.log('==============');
console.log('');


console.log('Плоский массив'); 
// Создай функцию flatArray, которая будет принимать массив чисел, элементами которого могут быть 
// другие одномерные массивы и преобразует его в плоский массив 
// Основные требования:
// 1. Исходный массив может содержать массивы в качестве элементов
// 2. Функция должна создать плоский массив из исходного массива
// 3. Функция должна отсортировать результирующий массив по возрастанию
// 4. Исходный массив не должен измениться

const flatArrayArr = [46, 75, [5, 34, 80], 6, -1]

function flatArray(arr) {
  // const arrCopy = [...arr];

  // arrCopy.forEach((el, i) => {
  //   if (Array.isArray(el)) {
  //     const arrDel = arrCopy.splice(i, 1);
  //     console.log(arrDel, '??????????'); 
      
  //     arrDel[0].forEach(el => arrCopy.push(el));
  //   }
  // });

  const mappedArr = arr.map(el => {
    if (Array.isArray(el)) {
      return [...el];
    } 
    return el;
  })

  function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  mappedArr.sort(compare);

  return mappedArr;
}

console.log(flatArrayArr, 'исходный массив');
console.log(flatArray(flatArrayArr));

console.log('');
console.log('==============');
console.log('');

console.log('Имена студентов, которые успешно сдали экзамен'); 
// Основные требования:
// 1. Создана функция getMessagesForBestStudents
// 2. Функция принимает два аргумента - массивы. Первый аргумент - массив имен всей группы, 
// второй аргумент - массив имен студентов, которые НЕ сдали экзамен (оба массива содержат строки - 
// имена в качестве элементов)
// 3. Функция выбирает имена студентов, которые успешно сдали экзамен, и возращает массив сообщений 
// для них в формате 'Good job, Ann'. Где Ann - это имя студента, которые сдал экзамен
// 4. Входящие массивы не меняются
// 5. Для решения задачи используется только подходящие метод массивов, циклы не используются

const students = ['John', 'Olivya', 'Oleksandr', 'Nastya', 'Emanuel', 'Vanya'];

const failedStudents = ['John', 'Nastya'];

function getMessagesForBestStudents(students, failedStudents) {
  
  const studentsCopy = [...students];

  failedStudents.forEach((el, i) => {
    if (students.includes(el)) {
      let index = studentsCopy.indexOf(el);
      studentsCopy.splice(index, 1);
    }
  });

  return studentsCopy.map(el => `Good job, ${el}`);

}

console.log(students, 'исходный массив');
console.log(failedStudents, 'исходный массив');
console.log('');

console.log(getMessagesForBestStudents(students, failedStudents));

console.log('');
console.log('==============');
console.log('');

console.log('Square array'); 
// Создай функцию squareArray, которая будет принимать массив чисел и возвращать массив с числами 
// возведенными в квадрат
// Основные требования:
// 1. Создана функция squareArray, которая принимает один аргумент - массив
// 2. Функция возвращает null, если в качестве аргумента передан не массив
// 3. Если аргумент - массив, то функция возвращает новый массив, где каждый элемент возведен в квадрат
// 4. Входящий массив не меняется
// 5. Для решения задачи используется только подходящий метод массивов, циклы не используются

const squareArrayArr = [2, 3, 4, 5, 6, 7, 8, 9];

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  // return arr.map(el => el*el);

  return arr.map(el => Math.pow(el, 2));
}

console.log(squareArrayArr, 'исходный массив');
console.log(squareArray(squareArrayArr));

console.log('');
console.log('==============');
console.log('');

console.log('Переверните массив'); 
// Создайте функцию reverseArray, которая будет принимать массив чисел и возвращать зеркальный массив
// Основные требования:
// 1. Функция должна называться reverseArray
// 2. Функция должна вернуть null, если в качестве аргумента передан не массив
// 3. Если аргумент - массив, то функция должна вернуть массив, где первый элемент стал последним, 
// второй предпоследний, ..., последний - первым
// 4. Исходный массив не должен поменяться
// 5. Используйте методы массивов для решения текущей задачи. Циклы for и while здесь использовать не нужно

const reverseArrayArr = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } 
  
  return arr.reverse();
}

// почему не поменялся исходный массив? reverse должен менять и вне функции меняет

console.log(reverseArrayArr, 'исходный массив');
console.log(reverseArray(reverseArrayArr));

console.log('');
console.log('==============');
console.log('');

console.log('Увеличение четных - методы массивов'); 
// Напишите функцию которая будет увеличивать четные числа массива на delta
// Основные требования:
// 1. Функция должна называться increaseEvenEl(arr, delta)
// 2. Функция должна вернуть null, если в качестве аргумента передан не массив
// 3. Если аргумент - массив, то функция должна увеличивать четные числа массива на delta
// 4. Используйте метод массивов map для решения текущей задачи. Циклы for и while здесь использовать не нужно
// Пример работы:
// Input: increaseEvenEI([2, 5, 6, 8, 11, 9, 4], 20)
// Output: [22, 5, 26, 28, 11, 9, 24]

const increaseEvenElArr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }

  // return arr.map(el => {
  //   if (el % 2 == 0) {
  //     return el + delta;
  //   } 
    
  //   return el;
  // });

  return arr.map(el => (el % 2 == 0) ? el + delta : el);

}

console.log(increaseEvenEl(increaseEvenElArr, delta));

console.log('');
console.log('==============');
console.log('');

console.log('Клон массива - методы массивов'); 
// Напишите функцию, которая будет клонировать входящий массив и возвращать новый массив
// Основные требования:
// 1. Функция должна называться cloneArr (arr)
// 2. Функция должна вернуть null, если в качестве аргумента передан не массив
// 3. Если аргумент - массив, то функция должна клонировать входящий массив и возвращать новый массив
// 4. Используйте спред оператор для решения текущей задачи. Циклы for и while здесь использовать не нужно

const cloneArrArr = [10, 20, 30, 40, 50];

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [...arr];
}

console.log(cloneArrArr, 'исходный массив');
console.log(cloneArr(cloneArrArr) === cloneArrArr);

console.log('');
console.log('==============');
console.log('');

console.log('Withdraw - методы массивов');
// Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. 
// Если денег на счете недостаточно функция будет возвращать -1
// Считаем что в массиве clients хранятся имена клиентов, а в массиве balances - балансы их счетов соответственно. 
// То есть у клиента по индексу 2 с массива clients , баланс счета - это значение по индексу 2 с массива balances
// На вход гарантировано приходит массив строк, массив чисел, строка (имя клиента) и число (сумма на снятие)
// Основные требования:
// 1. Функция должна называться withdraw(clients, balances, client, amount)
// 2. Функция должна снимать деньги со счета определенного клиента и возвращать остаток на счете. 
// Если денег на счете недостаточно функция будет возвращать -1 (деньги в этом случае не должны быть сняты)
// 3. Используйте методы массивов для решения текущей задачи. Циклы for и while здесь использовать не нужно

const clients = ['John', 'Olivya', 'Oleksandr', 'Nastya', 'Emanuel', 'Vanya'];

const balances = [70, 200, 50, 1000, 36, 45];

const max = clients.length-1;

function getRandomIntInclusive(max) {
  return Math.floor(Math.random() * (max + 1));
}
const client = clients[getRandomIntInclusive(max)];

const amount = 50;


function withdraw(clients, balances, client, amount) {
  const index = clients.indexOf(client);
  
  const result = balances[index] - amount;

  if (result >= 0) {
    balances[index] = result;
    return result;
  } else {
    return -1
  }
}

console.log(client);
console.log(withdraw(clients, balances, client, amount))
console.log(balances);

console.log('');
console.log('==============');
console.log('');

console.log('Сумма элементов массива');
// Напишите функцию которая будет находить сумму элементов масссива
// Основные требования:
// 1. Функция должна называться sum(arr)
// 2. Функция должна вернуть null, если в качестве аргумента передан не массив
// 3. Если аргумент - массив, то функция должна возвращать сумму элементов масссива
// 4. Используйте метод массивов reduce для решения текущей задачи. Циклы for и while здесь использовать не нужно
// Пример работы:
// Input: sum([2, 5, 6, 3, 0, 3, -1])
// Output: 18

let sumArr = [2, 5, 6, 3, 0, 3, -1];

function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((accum, el) => accum + el);
}

console.log(sum(sumArr));

console.log('');
console.log('==============');
console.log('');

console.log('Фильтр имен');
// Напишите функцию которая будет находить имена в массиве строк, которые содержат входящую текст text и 
// имеют длину больше 5
// Основные требования:
// 1. Функция должна называться filterNames(arr, text) . arr - массив строк, text - входящая строка
// 2. Функция должна возвращать массив элементов, которые содержат в себе строку text и имеют длину больше 5
// 3. Используйте метод массивов filter для решения текущей задачи. Циклы for и while здесь использовать не нужно
// Пример работы:
// Input: filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya')
// Output: ['Olivya', 'Nastya']

const filterNamesArr = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
const text = 'ya';

function filterNames(arr, text) {
  return arr.filter(el => el.includes('ya') && el.length > 5)
}

console.log(filterNames(filterNamesArr, text));

console.log('');
console.log('==============');
console.log('');

console.log('Нахождение среднего');
// Напишите функцию которая будет находить среднее арифметическое элементов масссива
// Основные требования:
// 1. Функция должна называться arrAverage(arr)
// 2. Функция должна вернуть null, если в качестве аргумента передан не массив
// 3. Если аргумент - массив, то функция должна возвращать среднее арифметическое элементов масссива
// 4. Используйте метод массивов reduce для решения текущей задачи. Циклы for и while здесь использовать не нужно

const arrAverageArr = [30, 64, 80, 22, 56];

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let summ = arr.reduce((accum, el) => accum + el);
  
  return (summ / arr.length);

}

console.log(arrAverage(arrAverageArr));