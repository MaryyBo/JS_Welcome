// This в в різних контекстах
// This в глобальній області видимості посилається на об'єкт Window 

'use strict'; //директива для включення строгого режиму strict mode

console.log(this);  //вказує на Window 


// Function declaration

function test() { 
  console.log(this); // коли включений 'use strict' то this в середині об'єкту чи функцію він не буде вказувати на глобальний об'єкт Window
} // вказує на функцію ( мають свій власний контекст)

test();

//Function Expression

const test2 = function() { 
  console.log(this);   // вказує на  функцію ( мають свій власний контекст)
}

test2 ();

console.log(this); // вказує на Window 

// Весь код, оточений фігурними дужками - контекст виконання
/* strict mode - запустив такий механізм , що у Function declaration та у Function Expression
 з'являється свій власний контекст виконання.
 Контекстом виконання ФУНКЦІЇ стає сама функція , а не глобальний об'єкт Window
 
 */

 // Arrow Function
 const test3 = () => {  // вказує на Window 
  console.log(this); 
 }

 test3();

 /*Стрілочна функція не має свого власного контексту виконання, тому вони беруть найближчий доступний їм контекст, 
 а це з глобальної області видимості - Window*/



 const newspaper = {
  title: 'News, news, news...',
  articles: [{
    author: 'John Doe',
    date: '23-08-2023',
    text: 'lorem'
  },{
    author: 'Richard Doe',
    date: '25-08-2023',
    text: 'lorem'
  },{
    author: 'Sam Doe',
    date: '25-08-2023',
    text: 'lorem'
  }],

  showArticles: function() {
    this.articles.forEach((item, index) => {  // this зараз вказує на об'єкт newspaper
      console.log(`${this.title} ${index} - ${item.author}`)
    })   
  }
 }


// showArticles: function() {
//   this.articles.forEach(function(item, index){  // ОТРИМАЄМО ПОМИЛКУ ${this.title} не буде читатися, тому що функція має свій власний контекст виконання
//     console.log(`${this.title} ${index} - ${item.author}`)
//   })   
// }
// }
 newspaper.showArticles();