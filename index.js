/*
Задача.
Зробити функцію-конструктор Country, яка приймає в якості аргументів:
- назва країни
- популяція (population)
- площа (area)
Спроектувати метод густоти населення
P.S. Густота наеселення = популяція цієї країни / площу цієї ж країни
*/ 

// function Country (name, population, area) {
// this.name = name;
// this.population = population;
// this.area = area;
// this.getDencity = function () {
// return this.population / this.area;
// }

// }

// let country1 = new Country ('Greese', 5674000, 704 );
// let country2 = new Country ('United Kingdom', 67333000, 243610);

// console.log(country2);

/*Задача 2

Зробити функцію-конструктор Авто, яке має:
- назву
- максимальну швидкість
- поточну швидкість
Спроектувати методи:
- метод прискорення (accelearte) - приймає в якості аргумента певне прискорення
Зауважте, що при прискоренні, поточна швидкісь не може бути більшою за максимальну швидкість
- метод сповільнення (deaccelerate) - приймає в якості аргумента певне сповільнення
Зауважте, що при сповільненні, поточна швидкість не може бути менше за 0
- метод зупинки (stop)
*/

// function Auto (name, maxspeed, currentspeed) {
// this.name = name;
// this.maxspeed = maxspeed;
// this.currentspeed = 0;

// this.accelearte = function (accelValue) {
// this.currentspeed = this.currentspeed + accelValue;

// if (this.currentspeed > this.maxspeed) {
// // return this.currentspeed;
// this.currentspeed = this.maxspeed;
// }
// return this.currentspeed

// }
// this.deaccelearte = function (deaccelValue) {
// this.currentspeed = this.currentspeed - deaccelValue;
// if (this.currentspeed < 0) {
// this.currentspeed < 0;
// }
// return this.currentspeed;
// }

// this.stop = function () {
// this.currentspeed = 0;
// return this.currentspeed;
// }
// }

// const auto = new Auto ('Mercedes-Benz', 325, 0);

//

//Задача. Всередині Alert виконати математичний розрахунок: 2 + 2 = 4

// alert ('2 + 2 = ' + (2 + 2)); 

// Подвійні лапки: "Привіт"
// Одинарні лапки: 'Привіт'

// Зворотні лапки: `Привіт` - мають розширену функціональність 
// Вирази укладаються в $ {...вираз...}
// Рядки , які знаходяться у взоротніх лапках `` називаються шаблонними

// const nickName = 'Вася';

// // Задача: створити Alert і привітатись з Васею

// // alert ('Привіт,' + nickName + '!'); //Ми можемо скоротити цей вираз з допомогою зворотніх лапок

// // alert (`Привіт , ${nickName}!`);

// // alert (`результат: ${1+2}`);

// // Запитати у користувача 2 числа і вивести alert

// const first = Number(prompt ('Enter first number'));
// const second = Number(prompt ('Enter second number'));

// // alert(String (first) + '+' + String (second) + '=' + String (first + second)); // 5 + 10 = 15

// alert (`${first} + ${second} = ${first + second}`);
