/*Cтворити конструктор об'єктів для представлення книг з наступними властивостями
- Назва книги, автор, рік видання, ціна
- Спроектувати методи для отримання і встановлення значень властивостей*/

//ЗАДАЧА2. Зробити для всіх книг метод, який би повернув ціну книги, але зі знижкою

function Book (title, author, year, price) {
this.title = title;
this.author = author;
this.year = year;
this.price = price;

this.getTitle = function () {
return this.title;
} // Можем реалізувати якусь перевірку права доступу до властивості
this.getAuthor = function () {
return this.author;
} // Можем реалізувати якусь перевірку права доступу до властивості
this.getYear = function () {
return this.year;
} // Можем реалізувати якусь перевірку права доступу до властивості
this.getPrice = function () {
return this.price;
} // Можем реалізувати якусь перевірку права доступу до властивості

this.setTitle = function (newTitle) {
this.title = newTitle; //присвоїти нову назву (тут ще можуть бути перевірки по типу права доступу до властивості, або зміни назви)
}
this. setAuthor = function (newAuthor) {
this.author = newAuthor;
}
this. setYear = function (newYear) {
this.year = newYear;
} // можна ще реалізувати , наприклад, якісь перевірки
this. setPrice = function (newPrice) {
this.price = newPrice;
}
this.culculateDiscauntedPrice = function (discountPercentage) {
const discountedPrice = this.price - (this.price * (discountPercentage / 100));
return discountedPrice;
}

}

const book1 = new Book ('Чотири вітри', 'Крістін Генна', 2020, 450)

// console.log(book1.getTitle ());
// console.log(book1.getAuthor());
// console.log(book1.getPrice());

// book1.setTitle('New Title'); //Поміняли значення!
// book1.setAuthor('New Author');//Поміняли значення!
// book1.setYear(2025);          //Поміняли значення!
// book1.setPrice (340);         //Поміняли значення!

// 
// console.log(book1.culculateDiscauntedPrice(70));

