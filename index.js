
/*Задача
ВИзначте кота з властивостями і декількома методами:
бігає
спить
мяукає

*/

// const cat = {
//   name: 'Tom',
//   color: 'Gigner',
//   size: 'Middle',
//   age: 1,
//   run: function (){
//     return 'I can run'
//   },
//   sleep: function () {
//     return 'I can sleep'
//   },
//   meow: function () {
//     return 'I can say \'meow!!!\''
//   }
// }

// //Об'єкт в об'єкті -----------------------------------------------

// cat.friend = {
//   name: 'Luk',
//   color: 'Black',
//   size: 'Small',
//   age: 4,
// }


// Конструктор визначає шаблон, скелет, об'єктів які створятсья 
/* Існують угоди для створення конструктору
1. Ім'я має починатися з ВЕЛИКОЇ літери.
2. Функція цього конструктора має виконуватись лише за допомогою оператора new

*/

// Задача. Написати функцію конструктор для сворення кота

function Cat (name, color, breed, age) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.run = function () {
    return this.name + 'Is running'
  }
}

// Задача. Створити декілько котів за допомогою конструктора

const cat1 = new Cat ('Bublik', 'White', 'Dvorovyi' , 1 );
const cat2 = new Cat ('Murzik', 'Black', 'Siam' , 4 );

