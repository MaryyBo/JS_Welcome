

/*Задача
Дано правильний пароль = qwerty1234
prompt
Запитуйте у користувача пароль, через prompt, поки пароль. який вводить користувач, 
не співпаде з еталонним 

1 Варіант*/ 

const correctPassword = 'qwerty1234';

// let userPass = prompt('Введіть свій пароль');
// // користувач в промт введе свій пароль, цей пароль запишеться у змінну userPass

// while (userPass !== correctPassword) {
//     userPass = prompt ('Помилка! Введіть пароль ще разюю.');

// }

// 2  Варіант*
// while (true) {
//     const userPass = prompt('Введіть свій пароль')
//     if (userPass === correctPassword) {
//         break; //якщо пароль співпадає, то виходимо з циклу (break)
//     }
// }

// 3  Варіант*

// let isPasswordCorrect = false;
// while (!isPasswordCorrect) {//isPasswordCorrect === false - можно скоротити , поставивши знак оклику перед !isPasswordCorrect
//     const userPass = prompt('Введіть свій пароль');

//     if (userPass === correctPassword) {
//         isPasswordCorrect = true;
//     }
// }

