/*
тіло класу - все що в середині

class MyClass {
    //методи класу
    constructor () {

    }
 method1() {...}
 method2() {...}
 method3() {...}

}
// Щоб стоврити новий об'єкт з усіма перерехованими методами

const user = new MyClass();

*/

class User {
    constructor (name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName () {
        return `${this.name} ${this.lastName}`;
    }
}

const user1 = new User('Alex', 'Dane', 20);
const user2 = new User('Dari', 'Dane', 23);


/*
Правила класів

1. constructor() при cтворенні класів ОБОВʼЯЗКОВИЙ
2. Ми не можемо самостійно звернутись до constructor (визивається оператором new - один раз)
3. У класа constructor має бути тільки ОДИН
4. Як і у функціях - конструкторах назва класу ЗАВЖДИ з ВЕЛИКОЇ літери
*/