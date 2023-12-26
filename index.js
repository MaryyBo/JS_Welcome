//Задача: Написати програму, яка перевіряє число на те, чи ділиться воно на 5, 3, 2


// const number = Number(prompt('Введіть число: '));

// if (number % 5 === 0) {
//   console.log(number + ' ділиться на 5')
// } else if (number % 3 === 0) {
//   console.log(number + ' ділиться на 3');
// } else if (number % 2 === 0) {
//   console.log(number + ' ділиться на 2');
// } else {
//   console.log(number + ' число націло не ділиться ні на 5, ні на 3, ні на 2')
// }
//
//Але ця конструкція важко читається, якщо там буде багато рядків коду

/*SWITCH - це спосіб реалізації вибору з декількох можливих варінтів в залежності від значення виразу
Ця констуркція використ у випадках коли перевіряється ОДНА змінна на різні значення

switch(вираз - якась змінна) {
  case  значення_виразу : робимо щось одне;
  case  значення2_виразу : робимо щось інше;
  case  значення3_виразу : робимо щось одне;
   default : робимо щось, якщо інші значення не підійшли!
} 
перевіряє ОДНУ зміну на різні можливі значення!!!

*/

 // Нам приходить номер місяця. За номером місяца треба визначити пору року

//  const monthNumber = 6;

//  switch(monthNumber) {
//    case 1:{
//     console.log('зима');
//     break;
//   }
//   case 2:{
//     console.log('зима');
//     break;
//   }
//    case 3:{
//     console.log('весна');
//     break;
//   }
//    case 4:{
//     console.log('весна');
//     break;
//   }
//   case 5:{
//     console.log('весна');
//     break;
//   }
//   case 6:{
//     console.log('літо');
//     break;
//   }
//   case 7:{
//     console.log('літо');
//     break;
//   }
//    case 8:{
//     console.log('літо');
//     break;
//   }
//    case 9:{
//     console.log('осінь');
//     break;
//   }
//   case 10:{
//     console.log('осінь');
//     break;
//   }
//   case 11:{
//     console.log('осінь');
//     break;
//   }
//   case 12:{
//     console.log('зима');
//     break;
// }
//   default: {
//   console.log('Введи число від 1 до 12')
// }

// }

//МОЖНА ЗГРУПУВАТИ, щоб не було таким довгим!


const monthNumber = 6;

switch(monthNumber) {
  case 1:
    case 2:
    case 12:{
   console.log('зима');
   break;
 }
 case 3:
  case 4:
    case 5:
  {
  console.log('весна');
  break;
}
 case 6:
  case 7:
    case 8:{
  console.log('літо');
  break;
}
case 9:
  case 10:
    case 11:{
  console.log('осінь');
  break;
}

}