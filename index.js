/* аrray.reduce - використ для обчислення якогось ОДНОГО значення на основі всіх елементів масиву
аrray.reduce - зводить всі елементи масиву до якогось одного результуючого значення (не мутуючий)
аrray.reduce (сallback, initialValue)
*/

 const numbersArray = [2, 3, 1, 2, 34, 21];

 // Задача: знайти суму numbersArray

 function reducer (accumulator, item) { //  тaccumulator - типу змінної де накоплюється сума
  return accumulator + item;
 }
 const sum = numbersArray.reduce(reducer, 0); // 0 - це початкове значення з якого ми починаємо рахувати суму