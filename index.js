

/*

Задача: написати функцію, яка приймає об'єкт і виводить всі значення всіх властивостей, оформлені *...*
А ключі - "..."

*/

const obj = {
  key1: 'value 1'
}

// "key1": *value1*


function stylingObj (obj) {
  for (let key in obj) {
    console.log(`"${key}": *${obj[key]}*`);
  }
}
