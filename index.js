/* Задача:

Клас Людина та похідний клас Студент

1. Базовий клас Людина з такими властивостями:

- ПІБ
- Дата Народження
- Стать

2. Похідний клас Студент, який наслідує властивості класу Людина.
Додаткові властивості: 

- Рік вступу
- Номер залікової книжки
- середній бал

3. Наступні методи для реалізації:

В класі Людина:

- greeting () - повертає привітання для людини, в залежності від її статі (Mr. або Mrs)

В класі Студент:

- isExcellentStudent () - перевіряє , чи є студент відмінником на основі середнього балу
Якщо середній бал вищий або рівний 90 , то метод поверне true, в іншому випадку  false

*/

class Person {
    constructor (fullName, birthYear,gender) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    //setter

    set fullName(value) {
        if (typeof value !== 'string') {
    throw new TypeError ('Fullname must be a string');
}
        this._fullName = value;

    }

    set birthYear (value) {
        // Тут по хорошому потрібно ВАЛІДУВАТИ дату!!! (Ми цього ще не вчили)
        this._birthYear = value
    }

    set gender (value) {
        if (typeof value !== 'string') {
            throw new TypeError ('Gender must be a string');
        }

        this._gender = value;
    }

    // getter

    get fullName () {
        return this._fullName;
    }

    get birthYear () {
        return this._birthYear;
    }

    get gender () {
        return this._gender;
    }

    // Methods

    greeting () {
        let prefix; // у цю змінну будемо класти або Mr або Mrs  взалежності від статі, тому вона і let змінна
if (this.gender === 'male') {
    prefix = 'Mr';

} else if (this.gender === 'female') {
    prefix = 'Mrs';

} else {
    prefix = prompt ('How should we address you?');
}
return  `'Hello' ${prefix} ${this.fullName}`;
    }
}


class Student extends Person {
    constructor (fullName, birthYear,gender, admissionYear, studentId, avarageGrade) {
        super (fullName, birthYear,gender);

        this.admissionYear = admissionYear;
        this.studentId = studentId;
        this.avarageGrade = avarageGrade;
    }

    set admissionYear(value) {
        this._admissionYear = value
    }

    set studentId (value) {
        this._studentId = value;
    }

    set avarageGrade (value) {
        if (typeof value !== 'number') {
            throw new TypeError ('avarage Grade must be a number')
        }
        if (value > 100 || value < 0) {
            throw new RangeError('avarage Grade must be [0;100;]')
        }
        this._avarageGrade = value;
    }
 
    // getter
    get admissionYear() {
        return this._admissionYear
    }

    get studentId () {
        return this._studentId;
    }
    get avarageGrade () {
        return this._avarageGrade;
    }

    isExcellentStudent (){

        // 1 варіант

        // if (this.avarageGrade >= 90) {
        //     return true;
        // } else {
        //     return false;
        // }

        // 2 варіантабо через Тернарний оператор!!

    //    const result = this.avarageGrade >= 90 ? true : false;
    //    return result;

        // 3 варіант  (максимальне скорочення)
        return this.avarageGrade >= 90;
    }

    /*
    1. створюємо сеттер для поля
    2. використовуємо сеттуер у конструкторі
    3. створюємо геттер
    */

    // Варіант 1
    static studentAverageGrade(students) {
    
        const totalGrades = students.reduce((accumulator, currentValue) => accumulator + currentValue.avarageGrade, 0);
        const averageGrade = totalGrades / students.length;
    
        return averageGrade;
    }

    
}

    // Варіант 2

//     static calculateAverageGrade(studentsArray) { // можна переписати через forEach ??

//         if (studentsArray.length === 0) {
//             return 0; // перевірки, які можна було б зробити
//         }
//         //Перевірка на те, чи об'єкт всередині масиву students є екземпляром класу Student!!!(Але це пізніше)

//         let sum = 0;
// for(let i = 0; i < studentsArray.length; i++) {
//     sum += studentsArray[i].avarageGrade;
// }

// return sum / studentsArray.length;

//     }
// }

// варіант 3
// let sum = 0;
// studentsArray.forEach (student => {
//     sum += student.avarageGrade;
// });
// return sum / studentsArray.length;

// const person = new Person ('Іванов Іван Іванович', 1985, 'male');
// const person2 = new Person ('Петров Петр Петрович', 1985, 'non Binary');

const student1 = new Student ('Махно Сидр Сидорович', 1990, 'male', 2021, 'A12-34-AF', 95);
const student2 = new Student ('Карапаскал Ирина Сидоровна', 1993, 'female', 2019, 'A12-45-AF', 85);
const student3 = new Student ('Іванова Катерина Михайлівна', 1987, 'female', 2021, 'A12-84-AF', 77);
const student4 = new Student ('Іваков Андрій Олексійович', 1996, 'male', 2020, 'A14-04-AF', 89);

const students = [student1,student2,student3,student4];


const averageGrade = Student.studentAverageGrade(students);

console.log(`Середній бал студентів: ${averageGrade}`);

 // Варіант 2

// const averageGrade = Student.calculateAverageGrade(students);

// console.log(`Середній бал студентів: ${averageGrade}`);


/*Домашня робота

Реалізувати статичний метод в класі Students

Цей метод приймає масив єкземплярів класу Students (166 строчка) обчислює і повертає як результат роботи середній бал всіх студентів з масиву*/


