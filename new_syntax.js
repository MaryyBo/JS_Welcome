// // Параметри за замовчуванням

// const MIN_ZP = 7100;
// const WORK_DAYS = 21;
// const MIN_RATE = MIN_ZP / WORK_DAYS // Параметри за замовчуванням

// class Worker {
//     constructor (name, lastName, daySalaryRate = MIN_RATE , workedDays = WORK_DAYS) {
//         this.name = name;
//         this.lastName = lastName;
//         this.daySalaryRate = Number(daySalaryRate.toFixed(2)); // для того, щоб округлити суму, та піднести до числа
//         this.workedDays = workedDays;
//     }
//     getMonthSalary () {
     
//             return this.daySalaryRate * this.workedDays;
//         }
        
// }


// const worker1 = new Worker("Alex", "Dane", 150, 20);
// const worker2 = new Worker('Dari', 'Dane', 130, 23);

// const worker3 = new Worker('Savanna', 'Loe'); // за замовчуванням підставиться 



// function sum (a = 10, b = 5) {
//     return a + b;
// }

// // Якщо викликати функц суми без передачі аргументів...вони будуть приймати значення за замовчуванням

// console.log(sum()); // 15
// console.log(sum(3, 6)); //9 - перезапишуть значення за замовчуванням
// console.log(sum(5, 5)); // 10

// якщо НЕ передано інші значення при виклику функції



// 'use strict' вже підключений для замовчуванням, через те що є class

// Код вчителя 
// class Worker {
//     constructor(name, lastName, rate = MIN_RATE, days = WORK_DAYS, coefficient) {
//         this.name = name;
//         this.lastName = lastName;
//         this.rate = Number(rate.toFixed(2));
//         this.days = days;
//         this.coefficient = coefficient;
//     }

//     getSalary() {
//         if(coefficient) {
//             return this.rate * this.days * coefficient;
//         } else {
//             return this.rate * this.days;
//         }
//     }
// }