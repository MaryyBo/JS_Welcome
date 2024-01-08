//Щоб перебрати значення які є в цьому об'єкті "Поштучно" є цикл FOR...IN

const user = {
  email: 'john.doe@gmail.com',
  name: 'Peter',
  age: 20,
  lastname: 'Doe',
  'favourite color': 'red',
  movie : 'Blue moon',
  avatar : 'http:...'

}

// for... in вик-я для перебору (ітерацій) ключів в об'єкті 

/*
for (variable in object) {
  код, що виконується для кожної властивості
}

variable - змінна, яка буде приймати значення ключів властивостей
object - об'єкт, властивості (ключі) якого ми хочемо перебрати


*/
//Задача. У об'єкті user вивести назви всіх ключів і властивості під цими ключами

for (let key in user) { //key - це і є variable 
  console.log(`${key} ---> ${user[key]}`); 
}