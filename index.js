//Перетворення (приведення) типу даних
 



// Перетворення типу даних - коли значення змінює тип даних з одного на інший
// Існує 2 типи перетворення даних: явне і неявне.
//приклад неявного перетворення даних (implicit type conversion)
// Мінус - це математичний оператор

let num = 6 - '1';  //5 JS-перетворив самостійно зі '1' строки число 1
// console.log(num);

//Явне перетворення типів (explicit type conversion) - приведення типів (ми свідомо викор функції щоб змінити значення)

let thisIsNumber = Number('45');

//Boolean - автоматично (неявно) приводиться до типу Number при автоматичних розрахунках
//true -->  1
//false --> 2

let booleanNumber = true + 1; // 1 + 1 = 2

// console.log(booleanNumber); //2

//String

let ThisIsString = String (45);// '45'
// console.log(ThisIsString);

let testString = null + ''; //Неявне приведення типу до String
// console.log(testString);

//КРАЩЕ ВИКОРИСТОВУВАТИ ТІЛЬКИ ЯВНЕ ПРИВЕДЕННЯ!!!

let test = 15 - Number('17');
// console.log(test);

//NaN - Not a Number

let notANumber = 2 * 'Hello'; //Привкедення типів не можливе, відбувається некоректна математ операція і це приводить до NaN

// console.log(notANumber);

// ()- це оператор виклику функції 
// математичні оператори (+ - * /)
// оператор конкатенації
// оператор typeof - дозволяє отримати тип операнда

//Oператор typeof

let box = true;
console.log (typeof box); //ми "засунули typeof в () console.log"