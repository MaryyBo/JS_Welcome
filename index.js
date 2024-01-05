

/*Loops - do - while 


while - це цикл з ПЕРЕДумовою
do - while - це цикл з ПІСЛЯумовою




Ми маємо виконати блок коду, гарантовано , завжди , потім перевіряємо умову, якщо умова
буде true то ми знову виконуємо блок коду

do {
    тут буде блок коду який буде циклічно виконуватись
} while (умова)

*/

 const correctPassword = 'qwerty1234'

 let userPass;

 do {
    userPass = prompt ('Введіть свій пароль');
 } while (userPass !== correctPassword);

 /* До тих пір, поки пароль з prompt НЕ дорівнює сorrectPassword, ми будемо 
 перевиконувати блок {
    userPass = prompt ('Введіть свій пароль');
 } 
 */