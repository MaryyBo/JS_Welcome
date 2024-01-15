/* Cтворити новий масив, кожен елемент якого = елемент зі старого масиву * 2 */

const oldArray = [2, 3, 4 ,5 ,1, 2];

// const newArray = oldArray.map((item) => {
//   return item * 2;
// });

// /* Змінити порядок слідування елементів в масиві newArray на протилежний */

// newArray.reverse ();

/* Ці дві дії можна об'єднати chaining */

const newArray = oldArray.map((item) => {
  return item * 2;
}).reverse().join(','); // chaining (map -> reverse -> join)

// Потрібно зробити з масива рядочок розділений комами