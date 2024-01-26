// ВАЛІДАЦІЯ 

const MIN_ZP = 7100;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP / WORK_DAYS // Параметри за замовчуванням

class Worker {
    constructor (name, lastName, rate = MIN_RATE , days = WORK_DAYS) {

        if (name === '' || lastName === '') {
            throw new Error ('You must enter your name and last name')
        }
        this.name = name;
        this.lastName = lastName;

        if (typeof rate !== 'number' || typeof days !== 'number') {
            throw new TypeError ('Rate and Days must be a number')
        }

        if ( rate < 0) {
            throw new RangeError ('Rate must be a positive number')
        }

        this._rate = Number(rate.toFixed(2)); //округлення .toFixed(2)

        if (days < 0 || days > 31) {
            throw new RangeError ('Days must be in range 0 - 31')
        }
        this.days = days;
    }

    setRate(value) {
        if (typeof value !== 'number') {
            throw new TypeError ('Rate must be a number')
        }

        if (value  < 0) {
            throw new RangeError ('Rate must be a positive number')
        }
        this._rate = value;
}

    getRate () {
        return this._rate;
    }

    getSalary () {
     
            return this.rate * this.days;
        }
        
}


const worker1 = new Worker("Alex", "Dane", 150, 20);
const worker2 = new Worker('Dari', 'Dane', 130, 23);
const worker3 = new Worker('Savanna', 'Loe'); // за замовчуванням підставиться 

/* Поля, назва яких починається зі знаку нижнього підкреслення _name, то їх не можна змінювати вручну!
Їх можна змінювати тільки за допомогою якогось методу set/get якщо потрібно втсановити якесь нове значення для поля 
що починається з знаку нижнього підкреслення _name , треба користуватися setter (value) {})

А є метод який буде повертати це нове значення getter () {}
*/ 
