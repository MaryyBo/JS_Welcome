 // [] = Обчислюввальні властивості для невалідних ідентифікаторв
//  Невалідні ідентифікатори - коли починається з числа, або є пробіл

 const user = {
  name : 'John',  //ключ name : значення 'John'
  'favourite color' : 'red',
  0: 'value',
 }
 // Ключем в об'єкті може бути рядок або тип даних Symbol
 // Ключ без лапок, JS автоматично оточує його лапками.

 console.log(user.name); //John
 console.log(user['favourite color']); // red
 console.log(user[0]); // value 

 // Валідні ідентифікатори доступ - .
 // Невалідні ідентифікатори доступ - []

 //////////////////////////////////////////////////////////////////////////

 const someObject = {
  2: 10
 }

 console.log(someObject[2]);

 someObject[2] // VSC - допомагає

 /*Задача 1 
 
 Є об'єкт з різними версіями привітань для користувача
 Вивести кор-чу привітання, в залежності від значення , яке він ввів*/

 const greets = {
  15: 'Hi',
  17: 'Ya, what`s up!',
  19: 'Hello',
  30: 'Good morning!'
 }

 const valueFromUser = 19;
 console.log(greets[19]); // AБО

 console.log(greets[valueFromUser]);