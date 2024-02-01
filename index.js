
const arr = [2, 4, 1, 3, 7, 3, 2, 1, 3, 5, 2, 8, 2, 4, 1]

//Реалізувати функцію лінійного пошуку якогось зачення в масиві.

function linearSearch (array, value) { //лінійна складність алгоритму
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1; // -1 повертається значення коли ми не знайшли елемент , який нам потрібен

}

// console.log(linearSearch(arr, 2));


// Лінійна складність коли Big O, тобто коли у нас стільки ітерацій (операцій), скільки у нас вхідних даних


// Приклад квадратичної складності
// Вивести таблицю множення 

function multyTable (limit){
    const table = [];
    for (let i = 1; i <= limit; i++) {
        for (let j = 1; j <= limit; j++) {
            table.push (`${i} * ${j} = ${i * j} `)
        }
    }
    return table;
}

// Квадратична складність, коли ми на віході отримуємо кількість вхідних даних тобто n в квадраті

// multyTable(1); // 1 (1^2 = 1)
// multyTable(2); // 4 (2^2 = 4)
// multyTable(3); // 9 (3^2 = 9)

// НЕ бажано використовувати квадратичну складність тобто цикл у циклі, подвійний цикл.

// Логарифмічна складність 
// на 100 вхідних даних припадає приблизно 6 операцій!

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // має бути порядок по збільшенню, відсортований масив!!! (можна ділити масив навпіл, скорочуєчи кількість операцій)

function binarySearch (array, whatToFind) { //чи може бути число в масиві взагалй
if (whatToFind > array[array.lenght - 1]) {
return - Infinity; // такого числа точно немає в масиві
}
let start = 0;
let end = array.lenght - 1;
let middle = Math.round((start + end) / 2); 

while (true) {
    if(array [middle] === whatToFind) {
        return middle;
    } if (array [middle] < whatToFind) {
        start = middle;
        middle = Meth.ceil((start + end) / 2); // якшо середній елемент менший за шуканий
   
    } else {
        end = middle;
        middle = Math.ceil((start + end) / 2); 
    }
}
}
// Є косяки!!!!Не працює 


