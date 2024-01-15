function MyArray() {
  this.length = 0;

//   this.push = function(value) {
//     // value - додати в КІНЕЦЬ масиву
//     this [this.length] = value; 
//     this.length++;
//   } 
//   return this.length
// }

// const arr = new MyArray();
// arr.push (1);
// arr.push (2);

/*Перепишіть пуш таким чином, щоб пуш міг приймати та додавав 
до масиву будь яку кількість переданих елементів */

this.push = function() {
  // arguments - додати в КІНЕЦЬ масиву
  for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
  }
  return this.length;
}

this.pop = function() {
  if (this.length > 0) {
    //  1. зберегти останній елемент
     const lastItem = this[this.length - 1]; 
     // 2. видалити останній елемент з масиву
     delete this [this.length - 1];
     // 3. зменшити довжину масиву на 1
     this.length--;
     // 4. повернути останній елемент
     return lastItem
  } else {
    return undefined;
  }
}
}

const arr = new MyArray();
arr.push(1);
arr.push(3, 2, 5, 10, 12, 33);

// ДЗ написати метод this.forEach = function (callback) {

}