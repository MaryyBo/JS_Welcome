class User {
    constructor(name, surname, age) {
        
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    
    getFullName () {
        return `${this.name} ${this.surname}`;
    }
}


class Moderator extends User {
    constructor (name, surname, age) {
        super (name, surname, age);
    }

    getFullName () {
        return `${this.name} ${this.surname} ---> ${this.age}`;
    }

    createPost () {
        console.log('Post seccessfully created')
    }

    deletePost () {
        console.log('Post seccessfully deleted')
    }
}

class Admin extends Moderator {
    constructor (name, surname, age, uniquePrefix) {
        super (name, surname, age);
        this.uniquePrefix = uniquePrefix // унікальна властивість!Бо це Адмін
    }

    // getFullName () {  // ЯКЩО Я НЕ ХОЧУ ВИТЯГАТИ ВІК ДЛЯ Admin треба перевизначити функццію
    //     return `${this.name} ${this.surname}`;
    // }

    makeModerator (userId) {
        console.log('Moderator seccessfully set')
    }

    deleteModerator (userId) {
        console.log('Moderator seccessfully deleted')
    }

}

    class Support extends Admin {
        constructor (name,uniquePrefix) {
            super (name, null, null, uniquePrefix );
        }

        getFullName () {
            return `${this.name} ---> ${this.uniquePrefix}`;
        }
    }

const user = new User ('John', 'Doe', 32)
const moderator = new Moderator ('Alex', 'Craine', 56)
const admin = new Admin ('Max', 'Stew',45, 'Head of Sales')
const support = new Support ('William', 'Head of Support')


// Модератори, ті ж самі юзери , але вміють або можуть створювати пости на сайті і удаляти ії
// Адміни - можуть призначати модераторів (юзери що мають все те що є у юзера, вміють робити все те, що роблять моератори + щось своє)