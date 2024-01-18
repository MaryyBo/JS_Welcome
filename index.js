'use strict';

// function sum (a, b) {
//     return a + b;
// }

// sum (3,4); // 7
// sum (5,5); // 10

// //АЛЕ !!! можна викликати функцію суми ось так

// sum (1, 2, 3, 4); // 3 - тільки 2 аргументи враховуються!!!інші елементи попадають в arguments

 
/* Задача: У функції sum знайти суму двух елементів, а усі інші аругменти ,
 які передали у функцію ззовні, при виклику, їх потрібно покласти у масив
 
 Тут нам допоможе REST оператор - rest ( залишок) він працює з залишками...
 ...,...,...,..., ->> [] rest покалде всі іншлі аргументи у масив

 ... трикрапка це REST
 */

//  function sum (a, b, ...arrayOfRestArguments) { //Назву масиву новому даємо яку хочемо
//     console.log(arrayOfRestArguments);
//     return a + b;
// }


// console.log(sum (8, 2, 3, 4, 10, 4));  // (3, 4, 10, 4) - це все піде в новий масив!

// Задача: Написати стрілочну функцію, яка сумує будь яку кількість чисел( rest оператор працює в стрілочниї функц)

// const arrowSum = (...restArrayOfNumbers) => {
//     let sum = 0;
//     for (let i = 0; i< restArrayOfNumbers.length; i++) {
//         sum += restArrayOfNumbers[i];
//     }

//     return sum; 
// }


// Задача тепер написати варіант функціі arrowSum з використанням методу reduce (передати стрілковий callback)



const arrowSum = (...restArray) => { // 1 варіант виконання 

    const sum = restArray.reduce ((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum;
}


// const arrowSum = (...restArray) =>  // 2 варіант виконання  (максимально короткий)

//     restArray.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);


