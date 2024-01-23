// const obj = {
//     key1: 'value',
//     method: function(){      
//     }
// }
// // Можна створювати об'єкти літерально (копіювати), але це важко ідовго
// //Зручніше використати Функцію конструктор одніє форми але з різними даними

// function MyObject (){
//     this.key1 = 'value';
//     this.method = function(){

//     }
// }

// const user1 = new User() // єкземпляр об'єкта User
// const user2 = new User()

function User (name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}
  
 function UserPrototype () {
    this.getFullName = function (){
        return `${this.name} ${this.lastName}`;
    }
}

User.prototype = new UserPrototype();


const user1 = new User('John', 'Doe', 56);
const user2 = new User('Jane', 'Freeman', 44);


// user1.getFullName === user2.getFullName - false
// this - вказує на об'єкт ДО крапки у виклику функції
// метод створюється свій власний і це ПОГАНО ( треба зробити так, щоб всі методи знаходилися в одному місці)
// __proto__ - працює з об'єктами , які створюються літерально
// .prototype - працює з конструкторами