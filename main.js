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

console.log(counted);

console.log('');
console.log('==============');
console.log('');

// Sort массива
// Создайте функцию sortDesc, которая будет сортировать переданный массив чисел по убыванию
// Основные требования:
// 1. Функция должна называться sortDesc
// 2. Функция должна отсортировать исходный массив в порядке убывания
// 3. Исходный массив не должен измениться

const sortDescArr = [7, 20, 34, 56, 72, 3, 11];

function compare(a,b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

function sortDesc(arr) {
  const newArr = arr.map(el => el);
  // sort меняет первоначальный массив, правильно ли я промапил сначала?
  return newArr.sort(compare);
}

console.log(sortDesc(sortDescArr));
console.log(sortDescArr, 'исходный массив');


console.log('');
console.log('==============');
console.log('');


// Плоский массив
// Создай функцию flatArray, которая будет принимать массив чисел, элементами которого могут быть 
// другие одномерные массивы и преобразует его в плоский массив 
// Основные требования:
// 1. Исходный массив может содержать массивы в качестве элементов
// 2. Функция должна создать плоский массив из исходного массива
// 3. Функция должна отсортировать результирующий массив по возрастанию
// 4. Исходный массив не должен измениться

const flatArrayArr = [46, 75, [5, 34, 80], 6, -1]

function flatArray(arr) {
  const newArr = arr.map(el => el);

  const newArr1 = newArr.forEach((el, i) => {
    if (Array.isArray(el)) {
      const arrDel = newArr.splice(i, 1);
      arrDel.forEach(el => newArr.push(el));
    }
  });

  return newArr;
}

console.log(flatArray(flatArrayArr));
console.log(flatArrayArr, 'исходный массив');
