function t() {
  
  arguments [4] = 'testvalue' // ми переоприділили
  console.log(arguments)
}
t(1 , 2, 3, 4, 5);

// console.log(t); // є консольлог, а є консольдір

// console.dir(t); // розгорнутий вид
// arguments - не є масивом (псевдомасив), але його можно перетворити

// function sum (a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(sum (2, 6, 3, 4, 5, 6, 7));


//Задача: Написати функціяю, яка повертає суму БУДЬ-ЯКОЇ кількости переданих в неї аргументів

// Задача: написати функцію, яка повертає суму БУДЬ-ЯКОЇ кількості переданих в неї аргументів

function sum() {
  const arrayArgs = Array.from(arguments);

  let sum = 0;

  for(let i = 0; i < arrayArgs.length; i++) {
    sum += arrayArgs[i];
  }

  return sum;
}

console.log(sum(2, 2, 2, 2, 2, 100));