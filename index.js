//Задача: Написати функцію суми додатніх чисел

/**
 * Функція знаходить суму двох додатніх чисел
 * @param {number} a перший доданок
 * @param {number} b другий доданок
 * @returns {number} сума
 * @throws {RangeError} якщо a  або b - не є цілим числом
 * @throws {TypeError}  якщо a  або b - не є числом
 */


function sumOfPositiveNumber (a, b) {
    if (a < 0 || b < 0) {
     //маємо тут ! "викинути" помилку (RangeError - помилкиДіапазону)
      const error = new RangeError('Якесь з чисел менше 0');
      throw error; // Це типу return, тільки для помилок!
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError ('Параметри a та b мають бути числами')
    }
    return a + b;
}


try { // прописуєте якийсь код, очікуючи,що тут може виникнути помилка
    sumOfPositiveNumber (1, -8);
} catch (error) {
    console.log(error);
}

console.log('Usual code flow');


// Використовувати ПРОСТО Error, якщо не можемо обрати тип помилки. 

// THROW
// Синтаксис оператор throw <об'єкт_помилки>
// Назва оператора перекладається як - кинути
// Це типу return, тільки для помилок!

// SyntaxError

// & - Uncaught SyntaxError: Unexpected token '&' 
// ...abracadabra - Uncaught SyntaxError: Unexpected token '...'


// ReferenceError - не доступна в поточній області видимості

// TypeError - проблеми з типом даних

// sumOfPositiveNumber (1, -2);