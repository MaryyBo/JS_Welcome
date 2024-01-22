const date = new Date(); // за замовченням буде стоврена поточна системна дата та час
const date1 = new Date ('12-31-2023');
/* Ми можемо самостійно передати дату яка нам потрібна 
 (за американським форматом)

new Date ('12-31-2023')
Sun Dec 31 2023 00:00:00 GMT+0100 (Central European Standard Time)*/

console.log(date1.getDate()); // 31 

console.log(date1.getDay()); // 0 (Отримання дня тижня з дати. В америці дні починаються з Неділі - 0, понеділок -1, вівторок - 2)

console.log(date1.getFullYear()); // 2023 показує рік з дати.

console.log(date.getHours()); // Покаже поточний час (годину) з дати

console.log(date.getMinutes()); // Поверне хвилини (це так само працює з секундами getSeconds)

console.log(date.getTime()); // Кількість мілісекунд що пройшли з 01 січня 1970 року (1705942962936 - Unix time)


// Задача : знайти суму першого одного 1000000 чисел

let sum = 0;// 1. Створюємо змінну
const time1 = new Date(); // Відрізок часу до початку операціі 2

for (let i = 0; i <= 1000000; i++){ // 2. Накопичуємо суму
    sum += i;
}

const time2 = new Date(); // Відрізок часу після операціі 2

console.log(sum); // 500000500000  // 2. Консолимо суму


console.log(time2.getTime() - time1.getTime()); // 13 мілісекунд на обробку ітерацій (результат буде постійно різний)
/*time1
Mon Jan 22 2024 18:14:23 GMT+0100 (Central European Standard Time)
time2
Mon Jan 22 2024 18:14:23 GMT+0100 (Central European Standard Time)*/



//console.time - виміряти час виконання певного коду ( запускаємо таймер, даємо йомунґ назву)

console.time('operation'); // Включили таймер

let sum2 = 0;
for (let i = 0; i <= 1000000; i++){ // 2. Накопичуємо суму
    sum += i;
}

console.timeEnd('operation'); // Зупинити таймер
