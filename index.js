function saySomething (howToSay, whaToSay){
  howToSay(whaToSay);
}

// saySomething (alert, 'Hello user');
saySomething(console.log,'hi'); 

//Функції вищого порядку (HOF) High Order Function - передаєм в якості аргументу інші функції 
//сallback (функція зворотнього виклику)

 /*Метод array.forEach - використовується для перебору (ітерації) кожного елеменуту 
 масиву і виконаянн певної дії
 
 array.forEach(callback)
 
 */

 //Задача 1. Маємо масив чисел. Кожне значення цього масиву підвести до квадрату

 const array = [1, 2, 3, 4, 5];

//  function square (a) {
//   console.log(a*a)
//  }

// //  array.forEach(square); 

//  for (let i; i < array.length; i++) { //Це теж сам ,що array.forEach(square);
//   square (array [i]);
//  }

// array.forEach((item,index, array) => {});
// => - cтрілова функція використовується саме у callback
//item - текущий переглядаємий елем (послідовності аргументів змінювати не можно)
// index, array - зазвичай НЕ ПОТРІБНІ

// array.forEach((item) => {
//   console.log(item*item)
// });

//ДОДАТКОВА ІНФОРМАЦІЯ --> const square = (num) => (num * num); // ми опускаємо  {} скобки та return так як у нас одна дія

/*Метод array.map() - створює/повертати НОВИЙ масив використовується для перебору (ітерації) кожного елеменуту 
 масиву і виконання певної дії.
 
 */
 
//  function square (a) {
//     return (a*a);
//   }

  // const newArray = array.map(square ); 
  //Це можна переписати через стрількову функцію

  const newArray = array.map((item) => {
    return item * item;
  })

  