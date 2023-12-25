/*Для взаємодії з користувачем:
 console.log 
 alert ('Hello')

 prompt () - якесь повідомлення як в alert, 
 але тут ще буде інпут в який користувач зможе щось ввести.
 message
 defalt
 */

//  let result = prompt ('Введіть число');

//  console.log(typeof result); //Повертає значення ЯК РЯДОК, інакше треба приводити їх до НОМЕРА (явно привести до відповідного типу даних)
 


//  let firstOperand = Number (prompt ('Введіть перше число: ')); // 5
//  let secondOperand = Number (prompt ('Введіть друге число: ')); // 10
//             // '5'          *      '10'
//  console.log(firstOperand * secondOperand ); // ? варіант 1 = "510" / варіант 2 = "50"  варіант 3 = Nan

 //Краще примінити КОНСТРУКТОР NUMBER

 //Щоб перевірити тип NaN 

 let firstOperand = Number (prompt ('Введіть перше число: ')); // 5
 let secondOperand = Number (prompt ('Введіть друге число: ')); // 10
 let result = firstOperand + secondOperand;

if (Number.isNaN(result) ===true) {
  console.log('Ти не правий, введи число')
} else {
  console.log(result);
}