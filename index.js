

const dogArray = [{
  nickname: 'Tuzik',
  color: 'black',
  weight: 3,
  age: 2

}, {
  nickname: 'Dolly',
  color: 'white',
  weight: 5,
  age: 3
}, {
  nickname: 'Fagot',
  color: 'black',
  weight: 9,
  age: 5

}, {
  nickname: 'Stus',
  color: 'black',
  weight: 15,
  age: 1

}
]

//Задача : відсортувати собак за вагою на збільшення

// dogArray.sort ((dog1, dog2) => {
//   if (dog1.weight < dog2.weight) {
//     return -1
//   } else { 
//     return 1
//   }
// })

// і навпаки 

// dogArray.sort((dog1, dog2) => {

//   return dog2.weight - dog1.weight ; // cортування у зворотньому порядку
// })


// Відсортувати собак від найстаршого до наймолодшого

// 1 варіант розв'язку

// dogArray.sort ((dog1, dog2) => {
//   if (dog1.age > dog2.age) {
//     return -1;
//   } else {
//     return 1;
//   }
// })

// // 2 варіант розв'язку
// dogArray.sort ((dog1, dog2) => {
// return dog1.age - dog2.age; 
// })

// Задача 2 Відсіяти всіх собак окрім білих


// 1 варіант розв'язку

dogArray.filter ((dog) => {
  if (dog.color === 'white') {
  return true;
} else {
  return false
}
});



// або 

// dogArray.filter ((dog) => {
//   return dog.color === 'white'
// });

