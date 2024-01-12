
// Задача 1
// збільшити вік користувачів на 1

//   const users = [{
//     name: 'John',
//     lastName: 'Doe',
//     age: 19,
//     email: 'john.doe@gmail.com'
// }, {
//     name: 'Jane',
//     lastName: 'Doe',
//     age: 22,
//     email: 'jane.doe@gmail.com'
// }, {
//     name: 'Jackson',
//     lastName: 'Doe',
//     age: 55,
//     email: 'jackson.doe@gmail.com'
// }]

// users.forEach((user) => { //Цей код коротший
//   user.age += 1;
// });

// console.log(users);

// АБО переписати так як нижче!

// function plusOneYear (item) { //item - це елемент масиву
//   item.age += 1;
// }
// users.forEach (plusOneYear);
// console.log(users);

// Задача 2

// Дано масив:

// const array = [2, 44, 11, 234, 8, 2, 4, 1];

// Задача:
// Зробити новий масив, всі елементи якого = елемент зі старого масиву + 100

// Варіант 1
// const newArray  = array.map((item) => {
//     return item + 100;
// })

// Варіант 2
//  function plus100 (item) { 
//     return item + 100;
//   }
// console.log(array.map(plus100)); // можно користуватись цим


// Задача 3
/* Cтворити новий масив користувачів, об'єкти мають бути у такому вигляді
{
  fullname: 'John Doe',
  email: ....
}
*/

  const users = [{
    name: 'John',
    lastName: 'Doe',
    age: 19,
    email: 'john.doe@gmail.com'
}, {
    name: 'Jane',
    lastName: 'Doe',
    age: 22,
    email: 'jane.doe@gmail.com'
}, {
    name: 'Jackson',
    lastName: 'Doe',
    age: 55,
    email: 'jackson.doe@gmail.com'
}]

// 1 варіант

// const usersNew = users.map((user) => ({
//   fullname: `${user.name} ${user.lastName}`,
//   email: user.email
// }));

// console.log(usersNew);

// 2 варіант
// function newUserObject (user) {
//   return {
//     fullName: `${user.name} ${user.lastName}`,
//     email: user.email
//   }
// }

// const newUsers1 = users.map(newUserObject);

// 3 варіант

// const newArrFromUsers = users.map((user) => {
//   const newUser = { 
//     fullName: `${user.name} ${user.lastName}`,
//     email: user.email
//   };
//   return newUser;
// });

