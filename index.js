// let box1 = 'Hello';

// let box2; //undefined

// box2 = 15; //15

//Змінна cons має бути визначена

// const secretWord = 'syperSecret!Kyivstar!Cebersecuruti';

// // console.log(secretWord);

// //Перевизначати cons НЕ МОЖНА, браузер видає помилку Uncaught TypeError: Assignment to constant variable.
// secretWord = 'wordd';

// console.log(box2); // Не виконається, через помилку на рядку 14

//ОПЕРАЦІЇ З ЧИСЛАМИ "+""-""*""/""

let result1 = 1 + 2; //3

// console.log(result1);

let result2 = 3 - 2; //1

// console.log(result2);

let result3 = 2 * 2; //4

// console.log(result3);

let result4 = 4 / 2; //2

// console.log(result4);

// також може складати дробні числа

let result5 = 0.1 + 0.2; //0.3

// console.log(result5);

let notAllowed = 10 / 0; //коли ділимо на 0 отримуємо значення Infinity

// console.log(notAllowed);

let brrrr = 10 / 'Hello world';

// console.log(brrrr); // NaN - Not a Number - операція неприпустима з точки зору математики


//Оператор "+" складає числа (зазвичай), а ще він вміє склеювати строки (КОНКАТЕНАЦІЯ)
// У нас є 2 рядки і ми склеюємо їх в 1

let newLine = 'Hello' + 'World';
// console.log(newLine);

newLine = 5 + 'Hello'; //в даному випадку "+" працює не як додавання в математиці, а як конкатенатор, склеюючи рядки.
// console.log(newLine);

newLine = '1' + 1; // тут ми отримуємо 11, а не 2))) тому що "1" це рядок

console.log(newLine);

