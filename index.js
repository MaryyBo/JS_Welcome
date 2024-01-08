
//Об'єкт КІТ


const cat = {
  name: 'Murzik',
  color: 'Red',
  breed: 'Dvorovyi',
  age: 2,
  eat: function () {
    return 'I am eating'
  },
  sleep: function () {
    return 'A am sleeping'
  }
}

cat.age = cat.age + 1; // Змінили вік кота з 2 на 3


//Якщо потрібно видалити якийсь метод чи властивість - Оператор delete

// delete cat.sleep;

// Adding Properties
// Задача. Додати ім'я друга Мурзика до об'єкту Мурзина

cat.friend = 'Tuzik'
cat['favourite food'] = 'Fish'; // Додавання невалідного ідентифікатору (через пробіл)
cat.meow = function () {
  return 'meow meow meow!'
}