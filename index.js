 /* 
 Массив дає нам методи управління колекціями
 Кожен метод надає певний функціонал для роботи з масивами.
 
 Метод array.concat() - для об'єднання двох або більше масивів в один (новий)

 array.concat(array1, array2,...arrayN)
 
 */

 const array1 = [1,2,3,4];
 const array2 =  array1.concat([222,888,333], [567,45,65]);

//  console.log(array2);

// /* 
//  Метод array.fill() - використовується для заповнення всіх елементів масиву якимсь одним наченням

//  Приймає 3 аргументи array.fill(value, [start,end])
 
//  */

 const array3 = new Array (5);
 array3.fill(1);

 /* 
 Метод array.includes(елемент, назва, який шукаємо) - для перевірки наявності певного значення у масиві
 
 array.includes( surchValue(елемент, назва, який шукаємо), [FromIndex]
 - Повертає true/false
  
 */

 const array4 = [2,12,1,5,8,13,12]; //якщо 2 числа 12, то нам повернеться 1 входження, перше елемент зі знач- 12

 console.log(array4.includes(12));

  /* 
   Метод array.indexOf() - для отримання першого входження певного значення в масиві
  array.indexOf (searchElement, [fromIndex пошук починається зі знач яке вказали])
   - Якщо елемент не найдено повертає "-1"
 */

  //  console.log(array4.indexOf(12));


  /* 
   Метод array.join() - oб'єднує всі елементи масиву в рядок
   array.join([separator])
 */
   

   const array5 = ['Hello', 'world', 4, 2, 'hi'];

   console.log(array5.join());

    /* 
   Метод array.push() - додавання 1 або декількох елементів в КІНЕЦЬ масиву
   array.push(element1,element2....elementN)
 */

   const array6 = [1,2,3,4,5];

   array6.push(6,7,8,9,15);

   console.log(array6)
     /* 
   Метод array.pop() - використовується для видалення останнього елементу і змінює довжину на 1цю
   
 */

   array6.pop();
  
   console.log(array6);
