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