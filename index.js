/* Метод array.filter  - cтворює новий масив , який містить лише ті елементи які задовільняють певній умові (метод не мутуючий
  array.filter (callback)
  (callback)  - буде викликатись для кожного елементу масиву, і ця колбек функція в сеередині фільтр вона повинна повертати
  або true/false для кожного елементу масиву
  
  */
 // задача: відфільтрувати масив щоб залишились тільки додатні числа

  const numbersArray = [5, 3 ,-9, 21, -5, 1, -2, 4];

  function filterFunction (item) {
  //   if (item > 0) {
  //     return true;
  //   } else {      // item < 0}
  //     return false;
  // } 

  // можемо сокротити код !!!

return item > 0
}


const filtredNumbersArray = numbersArray.filter (filterFunction);