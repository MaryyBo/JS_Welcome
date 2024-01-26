
class Animal { // батьківський класс
    constructor (nickname, color) {
        this.nickname = nickname;
        this.color = color;
    }

    eat () {
        return `${this.nickname} is eatng`
    }
}


// class Dog extends Animal клас Собаки розширює клас Тварини (наслідує цей клас)

class Dog extends Animal { // extend - для створення наслідування між класами
    constructor (nickname, color) { //дочірній клас
       super (nickname,color) // для виклику конструктора його батьківського класу - Animal
    }

    eat () {
        return `${this.nickname} is eatng`; //метод eat вже не треба, так , як він є у Animal
    }

    gav () {
        return `${this.nickname} gav gav gav `;
    }
}

const dog = new Dog ('Tuzik', 'grey');
