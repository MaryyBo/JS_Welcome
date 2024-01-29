//Успадкування - здатність до копіювання

class Figure { // Абстрактний клас 
    constructor (sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    get sideQuantity() {
return this._sideQuantity;

    }

    set sideQuantity (newValue) {
        if (newValue < 0) {
            throw new RangeError('Side quantity cannot be less than o')        
        }
        this._sideQuantity = newValue;
    }

    getArea () { //абстрактний метод

    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
        
    }

    get a() {
        return this._a;
    }
     
    set a(newValue) {
        if (newValue < 0) {
            throw new RangeError('Side cannot be less than o')        
        }
        this._a = newValue;
    }


    get b() {
        return this._b;
    }
     
    set b (newValue) {
        if (newValue < 0) {
            throw new RangeError('Side cannot be less than o')        
        }
        this._b = newValue;
    }

    get angle() {
        return this._angle;
    }

    set angle(newValue) {
        if (newValue < 0) {
            throw new RangeError('Side cannot be less than o') 
    }
    this._angle = newValue;
}

    getArea() { // віртулальний метод
        return this.a * this.b * Math.sin(this.angle);
    }
}


class Square extends Figure {
    constructor (a) {
        super (4);
        this.a = a;
    }

    get a() {
        return this._a;
    }

    set a (newValue) {
        if (newValue < 0) {
            throw new RangeError('Side cannot be less than o')        
        }
        this._a = newValue;
    }


    getArea () { // віртулальний метод
        return this.a * this.a; // this.a **2
    }
}

const square = new Square(4);
const triangle = new Triangle (5, 45, 6);



// Написати окрему функцію , яка буде приймати об'єкт якоїсь фігури і буде викликати у ціє фігури метод getArea

function getFigureArea (figure) {
   if(figure instanceof Figure) {
    return figure.getArea();
   }
   throw new TypeError('Параметр не є фігурою');
}

//instanceof - чи є якийсь об'єкт екземпляром певного класу. повертає true / false

/*

Переваги 

1. Візуально код стає простішим
2. Менше однакового коду (ми можемо перевикористовувати код, наслідуючи один від іншого)
3. Складні програми пишуться простіше
4. При наслідування ООП збільшується щвидкість написання (швидко можемо прийти до мінімально працюючого прототипу)

Недоліки

1. Важко зрозуміти і почати працювати (дуже багато треба знати)
2. ООП потребує більше пам'яті
3. Продуктивність коду може бути досить низька (із сучасними потужностями процессорів, недолік нівелюється)


*/