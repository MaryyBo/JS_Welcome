function greetingUser (user) {
  user.age = 50;
  return `Hey ${user.name} ${user.surname}. You will be ${user.age + 1} next year`

}
// Зміниться вік на 50
const user = {
  name: 'John',
  surname: 'Doe',
  age: 19
}
// Ми якщо приймаємо об'єкт в середині функції, то ми впливаємо на оригінальний об'єкт.