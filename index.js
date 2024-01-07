//Задача:

/*
Написати функцію , яка обчислює факторіал переданого ій числа, результат
роботи функції вивести на консолью.

Факторіал - це 
5! = 1*2*3*4*5
10! 

Якщо число відємне - поверніть з функції помилку
Якщо число = 0 , або = 1 - поверніть з функції 1
В іншому випадку - знаходимо факторіал. 


*/

function findFuctorial(number) {
  let factorial = 1; // У цій змінній ми накопичуємо добуток

  if (number < 0) {
    throw Error('Number below 0 cant be factorial!');

  } else if (number !== 0 && number !== 1) { 
    for(i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
  }

  return factorial;
}


function findFuctorial2(number) {
  let factorial = 1; // У цій змінній ми накопичуємо добуток

  if (number < 0) {
    throw Error('Number below 0 cant be factorial!');
  } else if (number === 0 || number === 1) { 
    return 1;
  } else {
    for(i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
  }

  return factorial;
}

let number = 5;

const result = findFuctorial(number);
const result2 = findFuctorial2(number);


console.log(result);
console.log(result2);
