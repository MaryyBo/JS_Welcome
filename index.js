

/* Задача 1

Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra'
Якщо заборонених слів у рядку немає - повертається false

checkSpam('buy ViAgRa now'); // true
checkSpam('free xxxxxxx'); // true
checkSpam('innocent rabbit'); // false

*/

//  // Varian 1

// function checkSpam(inputString) {
//     // Переводимо рядок в нижній регістр для врахування всіх варіантів написання слів
//     const lowerCaseInput = inputString.toLowerCase();
    
//     // Перевірка на наявність заборонених слів
//     return lowerCaseInput.includes('xxx') || lowerCaseInput.includes('viagra');
// }

// console.log(checkSpam('buy ViAgRa now')); // true
// console.log(checkSpam('free xxxxxxx')); // true
// console.log(checkSpam('innocent rabbit')); // false

// console.log(this);


 // Varian 2 (якщо заборонених слів буде більше)

function checkSpam(str) { 
    const spamArray = ['viagra','xxx','drugs']
    for (let i = 0; i< spamArray.length; i++){
        if (str.toLowerCase().includes(spamArray[i])=== true) {
            return true;
        }
    }
    return false;
}

console.log(checkSpam('buy ViAgRa now')); // true
console.log(checkSpam('free xxxxxxx')); // true
console.log(checkSpam('innocent rabbit')); // false



