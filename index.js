// ОБЛАСТІ ВИДИМОСТІ

const num1 = Number(prompt('Введіть перше число: '));
const num2 = Number(prompt('Введіть друге число: '));

function addTwoNumbers (arg1, arg2) {
  const result = arg1 + arg2;
  return result;
}

let result = addTwoNumbers (num1, num2);
console.log(result);

// Область видимості визначення доступності і видимості змінних та функцій у певних частинах коду
/* У JS існує 2 області видимости:

1. Глобальна область видимості (охоплює весь документ, всю програму, знаходяться на верхньому рівні)
    const globalVariable = 10;
    function globalFunction (){}; 

Вони доступні з будь якого місця нашої програми.

2. Локальна область видимості - визначається блоками коду , тобто { фігурними дужками},
 засунуті у фигурні дужки!

function testFunction () {

   все, що знаходиться всредині, локально, воно визначене блоком коду, в дужках
   const localVariable = 20;
}

console.log(localVariable); => localVariable недоступна тут



Можуть всередині бути if

function testFunction () {
   
   const localVariable = 20; //Локальна змінна testFunction

   if (true) {
    const innerVariable = 30; // Локальна змінна
    console.log(innerVariable); побачим 30
    сonsole.log(localVariable); побачим 20
    сonsole.log(globalVariable); побачим 10 - знаходиться у глобальній області видимості по відношенню до 
   }

   console.log(localVariable);
   console.log(innerVariable);
  }
   testFunction () 

*/
