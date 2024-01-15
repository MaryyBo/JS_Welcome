/* Array.sort - для сортування елементів в масиві (метод мутуючий) 
array.sort ([compairFunction]) 
- в [compairFunction] - порядок сортування (можна не задавати)
*/

const array = [5, 3, 9, 21, 5, 1, 2, 4];

//задача відстортувати масив за зростанням

// array.sort (); //сортування за зростанням, АЛЕ є АЛЕ  [1, 2, 21, 3, 4, 5, 5, 9] порівнюються перші букви або числа по UNICODE коду


const lettersArray = ['bbb', 'ccc', 'aaa', 'aba'];

// lettersArray.sort (); // ['aaa', 'aba', 'bbb', 'ccc'];

//Задача, відсортувати масив numbersArray за зростанням

function compairFunction(a, b) { // Функция-компаратор
  if (b > a) { // 4 це (a), це 6 (b)
     return -1;
  } else { // якщо b < a // 10 (a), 5 (b)
     return 1; 
  }

}
array.sort(compairFunction);

// a - текущее просматриваемое число
// b - наступне число, яке слідує за поточним
// Функция-компаратор - повинна повернути (return) одне з трьох можливих значень

// -1 - спочатку йде число a, потім число b
// 0 - елементи лишаються на місці
// 1  - спочатку йде число b, потім число a

const newNumbersArray = [3, 4, 1, 0, -5, 12, 13];

function compareNumbers (a, b) {
  // return a - b; // сортування у порядку зростання
  return b - a; // сортування у порядку cпадання
}

newNumbersArray.sort(compareNumbers);
