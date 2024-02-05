/*set - це ніби сосуд, колекція УНІКАЛЬНИХ значень, елементів, кожен елем в цьому сосуді можезустрічатися тільки один раз. 
Він схожий на масив чи на мапу, але сет не допускає наявності дублікатів.Якщо додаєм значення 
до set воно буде збережено лише одинраз 

set - множина (множество) набір уникальних значень

Значення додаються за допомогою методу -  .add


*/

const set = new Set();

// set.prototype.add - додає новий елемент із заданим значенням у кінеуь об'єкта Set

set.add(1);
set.add(4);
set.add('Hello');
set.add('Hello'); // Дублікати НЕ додаються в Set!!!

// set.prototype.has - перевіряє наявність елементу у множині (setі)

console.log(set.has(1)); //true
console.log(set.has(12)); //false

// set.prototype.delete - удаляє елемент з множини 

set.delete('Hello');

const set2 = new Set([2,3,4,5]);

// з set можно зробити масив

// set.prototype.values - використов для отримання ітератора який повертає нам всі значення з об'єкта set
 const valuesIterator = set.values();

 valuesIterator.next().value; // 1
 valuesIterator.next().value; // 4
 valuesIterator.next().value; // undefined, done: true

 const arrayFromSet = [...set.values()];