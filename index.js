

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

dogArray.sort((dog1, dog2) => {

  return dog2.weight - dog1.weight ; // cортування у зворотньому порядку
})