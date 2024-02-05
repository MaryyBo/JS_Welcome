// /*
// задача: Зберегти розклад занять, використовуючи дні тижня, як клчюі , а знаечннями будуть списки занять 
// */

// const schedule = new Map();

// schedule.set('Понеділок', ['Математика', 'Фізика']);
// schedule.set('Вівторок', ['Англійська мова', 'Всесвітня Історя']);
// schedule.set('Середа', ['Хімія', 'Географія']);
// schedule.set('Четвер', ['Зарубіжна література', 'Біологія']);
// schedule.set('П\'ятниця', ['Інформатика', 'Фізкультура']);

// // Отримання розкладу занять для певного дня
// console.log(schedule.get('Понеділок'));



// // Перевірка, чи є  розклад занять для певного дня

// console.log(schedule.has('Субота'))  //false

// // Отримання кількості днів в розкладі

// console.log(schedule.size);



// Задача : Дано 2 об'єкти юзерів:

const user1 = {
    firstName: 'Alex',
    lastName: 'Doe',
    id: 1
  }
  
const user2 = {
  firstName: 'John',
  lastName: 'Doe',
  id: 2
}
  
 // Також дано 2 масиви з повідомленнями цих юзерів:
  
  const alexMessages = ['hello', 'How are you?'];
  const johnMessages = ['hi!', 'I`m fine'];

  //Задача: за допомогою Map зв'язати користувача з його повідомленнями, щоб по ID користувача, можна було знайти його повідомлення

  const messagesFromUsers = new Map();

  messagesFromUsers.set(user1.id, alexMessages);
  messagesFromUsers.set(user2.id, johnMessages);

  function getMessagesFromUsers (userId) {
   return messagesFromUsers.get(userId)

  }

console.log(`${user1.firstName} ${user1.lastName}: `  + getMessagesFromUsers(1));
console.log(`${user2.firstName} ${user2.lastName}: `  + getMessagesFromUsers(2));



