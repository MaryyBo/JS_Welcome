/* Існує 3 вида ДЕСТРУКТУРИЗАЦІЇ у JS

1.Деструктуризація об'єктів
2.Деструктуризація вхідних параметрів
3.Деструктуризація масивів (зустрічається рідко)

*/

const arr = [1, 2, 3, 4, 5, 6];

// треба отримати - arr[0];

// const firstElement = arr[0]; // можемо зробити так
// console.log(firstElement);

const [firstElement, secondElement, thirdElement, ...restOfArr] = arr;


//2.Деструктуризація вхідних параметрів

function getFullName ({firstName, lastName, ...restObject}) {  //({}) ---> тут будемо приймати об'єкт
    console.log(restObject); // все, що залишилось йде в restObject!!
return `${firstName} ${lastName}`; // все інше окрім {firstName, lastName} - ігнорується
}

const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 42,
    geolocation: '42.34343546 56.7565342',
    browser: 'Chrome'
}

console.log(getFullName(user2)); // передаємо цілий масив і у відповідь через функцію все інше окрім {firstName, lastName} - ігнорується

