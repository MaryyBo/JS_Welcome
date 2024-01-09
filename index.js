


// /*

// Задача: у нас є об'єкт з зарплатами по всіх відділах.
// Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів

// */

// const departmentSalary = {
//   HR: 120000,
//   development: 5500000,
//   PR: 50000,
//   marketing: 120000,
//   asisstant: undefined
// }

// function getTotalSalary(departmentSalaries) {
//   let totalSalary = 0;

//   for (let key in getTotalSalary) {

//   }

// }

// // function sumOfWasteSalary(departmentSalary) {
// //   let sum = 0;
// //   let nameOfUndefined;
// //   for (let key in departmentSalary) {
// //     if (typeof departmentSalary[key] === "number") {
// //       sum += departmentSalary[key];
// //     } else {
// //       nameOfUndefined = key;
// //       console.log(
// //         `You have undefined salary for depertment: ${nameOfUndefined}`
// //       );
// //     }
// //   }



// Задача: у нас є об'єкт з зарплатами по всіх відділах.
// Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів

// */

const departmentSalary = {
  HR: 120000,
  development: 5500000,
  PR: 50000,
  marketing: 120000,
  // assistant: undefined
}

function getTotalSalary(departmentSalaries) { //departmentSalaries (абстракція) cтворюється окремо, компаний може бути багато

  let totalSalary = 0; //тут ми накопичуємо сумму, до неї буде докидуватись на кожній наступній ітерації

  for (let key in departmentSalaries) {

    if (typeof departmentSalaries[key] === "number") { // плюс додає тільки числа, маємо перевірити чи є ключ числом

      totalSalary += departmentSalaries[key] 
    }
  }

  return totalSalary;

}

const totalSalary = getTotalSalary(departmentSalary)

console.log(totalSalary)


//Задача . Прийняти через prompt назву дня тижня і видати alert що заплановано у користувача на цей день

// const obj = {
//   Mon: 'drive lesson',
//   Tue: 'dantist visit',
//   Wed: 'go to party',
//   Thu: 'hard work',
//   Fri: 'chill',
//   Sat: 'go to park'
//  }


//  const getDay = prompt ('Enter the day of the week. \nFor example:\nMon \nTue \nWed \netc...');

//  alert (`${getDay}: ${obj[getDay]}` ); 1 variant

// alert (obj[getDay] ? obj[getDay] : 'Error');  2 variant


//Задача : загорнути ключи в "..." а значення *....*

const obj = {
  Mon: 'drive lesson',
  Tue: 'dantist visit',
  Wed: 'go to party',
  Thu: 'hard work',
  Fri: 'chill',
  Sat: 'go to park'
 }


// "key1": *value1*


function stylingObj (obj) {
  for (let key in obj) {
    console.log(`"${key}": *${obj[key]}*`);
  }
}