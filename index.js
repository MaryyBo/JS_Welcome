/*
Map (карта, мапа, словник)
Зберігає пари : "ключ : значення" (як і об'єкт)
має розмір - size

Відмінності від звичайного об'єкт

1. Запам'ятовує елементи в тому ж порядку в якому ми їх додаємо, порядок важливий, 
2. Ключем може бути будь-якийтип даних (А неттак як у об'єкті може бути тип даних String чи Symbol)
(Об'єкти, в тому числі функції, передаються за посиланнями)

Ключ в колекції Map має бути унікальним
*/

const map = new Map(); // зберігаємо пари ключ значення, але в них ще є розмір - size

// set - задає значення
map.set(1, {});
map.set('1', 'value');

//get - для отримання значення по якомусь ключу

map.get('1');

//has - чи Є якийсь певний ключ в Map

map.has('1') //true

const vocabulary = new Map();

vocabulary.set ('cat', 'кіт');
vocabulary.set ('dog', 'собака');
vocabulary.set ('eat', 'їсти');

/*
Написати функцію яка приймає строку англійською мовою і преекладає українською,
використовуючи словник.
*/

function translator (str, vocabulary) {

    console.log(str);
    
    const arrayWords = str.toLowerCase().trim().split(' ') // split зробить масив
    
    console.log(arrayWords);
    //у нас є словник translator. Треба перебрати масив слів arrayWords і переклад для кожнгого англ слова дістати з нашого словника vocabulary
    const translatedArray = arrayWords.map((word) => {
        if(vocabulary.has(word)) {
          return vocabulary.get(word);
        } else {
          return word;
        }
      });
    
      return translatedArray.join(' ');
    }
    
    console.log(translator('    Cat eat dog    ', vocabulary));


// методи строк str
// str.trim() - прибере пробіли
// str.toLowerCase() - все буде маленькими буквами
// split(' ') // split зробить масив
// join - з масиву зробить строку