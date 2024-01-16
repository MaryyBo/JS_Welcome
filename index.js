/*Задача: створити функцію-конструктор для сходів. (ladder)
Об'єкт має властивість:
currentStair - сходинка, на якій ми зараз знаходимось. Початково = 0

Має методи:   <<<--- .prototype
up() - піднімає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує, на якій сходинці ми зараз знаходимось*/


function Ladder() {      // Це конструктор!!!
  this.currentStair = 0;

}

function MyLadderPrototype() {  //Об'кт з прототипом для нашої драбини
 // Метод на одну сходинку вище
 this.up = function() {
  this.currentStair++;// інкрементуємо сходинку
  return this; 
};

// Метод на одну сходинку нижче
this.down = function() {
      this.currentStair--;   
      return this; //декрементує сходинку
  };


// Метод для  поточної сходинки
this.showStair = function() {
  return this.currentStair;
}
}


Ladder.prototype = new MyLadderPrototype();

const myLadder = new Ladder();

// console.log(myLadder.up());
// console.log(myLadder.up());
// console.log(myLadder.up());
// console.log(myLadder.down());
// console.log(myLadder.showStair());

// Використання методів об'єкта
// myLadder.showStair(); //Поточна сходинка: 0
// myLadder.up();
// myLadder.showStair(); //Поточна сходинка: 1
// myLadder.down();
// myLadder.showStair(); //Поточна сходинка: 0

console.log(myLadder.up().up().up().down().showStair());