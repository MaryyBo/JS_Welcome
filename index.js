/*Задача 1

1. З масиву [1, 2, 3, 4, 5] зробіть масив [1, 4, 5]
2. З масиву [1, 2, 3, 4] запишіть в новий масив [2, 3, 4] // тут потрібно splice передати тільки start
3. З масиву [1, 2, 3, 4, 5] зробіть масив [1, 'w', 'tr-td', 2, 3, 4, 'vv', 5, 'aa'] */

// // Задача 1
// const arr1 = [1, 2, 3, 4, 5];
// arr1.splice (1,2);

// // Задача 2
// const arr2 = [1, 2, 3, 4];
// const arr3 = arr2.splice(0)

// Задача 3

const arr4 = [1, 2, 3, 4, 5];

arr4.splice(1, 0, 'w', 'tr-td' );
arr4.splice(6, 0, 'vv');
arr4.splice(8, 0, 'aa'); //Або чере push - arr4.push ('aa')

/* Задача 2 (*, не обов'язкова)

Напишіть функцію, яка приймає масив і перевіряє, чи є в масиві два однакових елемента поспіль.
Масив приймаємо як аргумент функції,
функція повертає true, якщо є два однакових елемента поспіль.
функція повертає false, якщо двох однакових елементів поспіль у масиві немає

[1, 2, 3, 4, 5] // false
[1, 2, 2, 3, 4] // true

Суть вирішення:
потрібно переглянути масив циклом;
на кожній ітерації циклу порівнювати поточне число з наступним числом у масиві ->
-> якщо число поточне і число наступне співпали - повертаємо true з функції
-> якщо число поточне і число наступне НЕ співпали - нічого не робимо

array[i] - поточне число
array[i + 1] - наступне число

*/

const arr5 = [1, 2, 3, 4, 5,];
const arr6 = [1, 2, 2, 3, 4,];


function elementsInARowDuplicates(arr) {
  for (let i = 0; i < arr.length -1; i++) { //arr.length -1; щоб відсікти зайву ітерацію
      if (arr[i] === arr[i + 1]) { 
          return true;
      }
  }
  return false;
}

console.log(elementsInARowDuplicates(arr5)); // false
console.log(elementsInARowDuplicates(arr6)); // true


// //2 варіант 

// function elementsInARowDuplicates2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const currentNumber = arr[i];
//     const nextNumber = arr[i +1 ];

//     if (currentNumber === nextNumber) {
//           return true;
//       }
//   }
//   return false;
// }


// console.log(elementsInARowDuplicates2(arr5)); // false
// console.log(elementsInARowDuplicates2(arr6)); // true



/* Задача 2 
Підрахувати кількість парних чисел в масиві:
Напишіть функцію, яка приймає масив чисел і повертає кількість парних чисел у масиві.
*/


// const arr5 = [1,22 , 14, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function countEvenNumbers (array) {
//   let count = 0;
  
//   for ( let i = 0; i < array.length; i++) {

//     if (array[i] % 2 === 0 ) {
//       count = count + 1; // equal to count++;
//     } 
//   }

//   return count;
// }
