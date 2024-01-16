
const cat = {
  name: 'Barsik',
  color: 'red',
  age: 1
  
}

const cat2 = {
  name: 'Murzik',
  color: 'black',
  age: 5
  
}

const catMethods = { //Прототип
  run: function () {
    console.log('Cat is running');
  },
  meow: function () {
    console.log('Meow');
    
  }
}

//Як прикрутити  catMethods до об'єкту cat

cat.__proto__ = catMethods; //прототипне посилання
cat2.__proto__ = catMethods;

/*console
cat
{name: 'Barsik', color: 'red', age: 1};
cat2
{name: 'Murzik', color: 'black', age: 5};
cat.meow === cat2.meow
true // одне посилання 
*/