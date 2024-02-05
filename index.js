

 //Задача: 

 const arrWithDoubles = [2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13]
 // повернути масив без повторень

//  const uniqueArr = new Set(arrWithDoubles);

 const newArr = [...new Set(arrWithDoubles)];

console.log(newArr);

