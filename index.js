
/*Дано два масиви:

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];

Повернути з функції масив, що складається з різниці двох масивів (тобто, тих значень, які не повторюються в обох масивах)

// Логіка:
Ви приймаєте 2 масиви
Вам потрібно зробити новий масив, але там не повинно бути дублювань
*/

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];


function twoArraysWithoutDoubles  (arr1, arr2) {
    return [...new Set ([...arr1, ...arr2])];
}

const arrayNew = twoArraysWithoutDoubles (arr1,arr2)

console.log(arrayNew);


// 2 варіант рішення

// const  twoArraysWithoutDoubles = (arr1,arr2) => [...new Set ([...arr1, ...arr2])];