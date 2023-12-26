
// const functionResult = addTwoNumbers(25267, 5)
// console.log('Sum result: ', functionResult);

// const asdas = addFiveToNumber(functionResult)


// function getMinutesFromHour(hours_qty) {
//   const minutesInHour = hours_qty * 60;
//   console.log('In ' + hours_qty + ' hours there are: ' + minutesInHour + ' minutes')
 
//   return minutesInHour;
// }
//------------------------------------------------------------------------------
// function getSecondsFromMinutes(minutes_qty) {
//   const secondsInMinute = minutes_qty * 60;
//   console.log('In ' + minutes_qty + ' minutes there are: ' + secondsInMinute + ' seconds')
//   return secondsInMinute;
// }

//------------------------------------------------------------------------------
// function getSecondsFromHour(hours_qty) {
//   const minInHr = getMinutesFromHour(hours_qty);
//   return getSecondsFromMinutes(minInHr) 

// }

// const secondsInHour = getSecondsFromHour(6);

//------------------------------------------------------------------------------
// Задача 1

// const value1 = Number1(prompt ('')

// Напишіть функцію, яка приймає 2 числа і повертає те, що більше

// function returnBiggerNumber(number1, number2) {
//   if (number1 > number2) {
//     return number1;
//   } else if (number1 === number2) {
//     console.log('Numbers are equal')
//     return number1;
//   } else {
//     return number2;
//   }
// }
 
// const biggerNumber = returnBiggerNumber(55, 55);
// console.log('Bigger number is ' + biggerNumber);

//------------------------------------------------------------------------------

// Задача 2
// Напишіть іншу функцію, яка знаходить середнє арифметичне з двох чисел.
// Середнє арифметичне значення = (одне число + друге число) / кількість чисел*/

// function getAvarageNumber(num1, num2) {
//   const result = (num1 + num2) / 2;
//   return result;
// }

// const num1 = 75;
// const num2 = 25;

// const avarageNumber = getAvarageNumber(num1, num2);
// console.log('Avarage number of ' + num1 + ' and ' + num2 + ' is ' + avarageNumber);
//---------------------------------------------------------------------------------

//Задача 3
// /*Напишіть функцію, яка приймає одне число і визначає,чи є воно парним (четность)*/

// function isPairNumber(number) {
//   if (number % 2 === 0) {
//     console.log('Number ' + number + ' is pair number')
//   } else {
//     console.log('Number ' + number + ' is not pair number')
//   }
// }

//  isPairNumber(76);

//----------------------------------------------------------------------------------
 
 /*Задача 4: 
 
 Повернення суми двох чисел
Напишіть функцію, яка приймає два числа як аргументи і повертає їхню суму.*/

function getSumOfTwoNumbers(numA, numB){
  const result = numA + numB;
  return result
}

const numA = 85;
const numB = 78;

const sumNumber = getSumOfTwoNumbers(numA, numB);
console.log('Сума чисел ' + numA + ' і ' + numB + ' = ' + sumNumber);

/*Завдання 5: 

Знаходження максимуму
Напишіть функцію, яка приймає три числа і повертає найбільше з них.*/

function returnBiggerNumber(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 &&  num2 >= num3){
  return num2;
} else {
  return num3;
}
}

const num1 = 155;
const num2 = 78;
const num3 = 154;

const getBiggerNumber = returnBiggerNumber(num1, num2, num3);

console.log('Найбільше число з трьох є число ' + getBiggerNumber);


//------------------------------------------------------------------------------

/*Задача 6: Перевірка парності

Напишіть функцію, яка приймає число і повертає true, 
якщо число парне, і false, якщо непарне.

моє рішення було...

function checkPairUnPair(numberA) {
  if (numberA % 2 === 0) {
    console.log('true ' + numberA + ' is pair number');
  }
  else {
    console.log('false ' + numberA + ' is not pair number')
  }
}

checkPairUnPair(24);*/

function checkPairUnPair(number) {
  return number % 2 === 0;
}

const result = checkPairUnPair(24);
console.log(result + ', число парне');


//--------------------------------------------------------------------------------
/*Завдання 2: Піднесення до ступеня

Напишіть функцію, яка приймає число і ступінь, до якого його потрібно підняти, 
і повертає результат піднесення до ступеня. */

function getDegreeFromNunber(num, deg) {
  return num ** deg;
}

const result1 = getDegreeFromNunber(2, 9) 
console.log(result1);

 //---------------------------------------------------------------------------------
 /*Завдання 5: Порівняння двох чисел

Напишіть функцію, яка приймає два числа і повертає true, 
якщо вони рівні, і false, якщо нерівні. */

function equalNumbers(a, b) {
  return a === b;
}
const result2 =  equalNumbers(4, 6)
console.log(result2);

//-----------------------------------------------------------------------------------
/*Завдання 6: Знаходження мінімуму

Напишіть функцію, яка приймає три числа і повертає найменше з них. */

function findMinimumNum(a, b, c) {
  if (a <= b && a <= c){
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else {
    return c;
  }
}

