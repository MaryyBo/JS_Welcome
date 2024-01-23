/*Задача 1

Знайти факторіал числа

5! = 5*4*3*2*1 = 120
*/

function findFactorial (number) {
    if (number === 1) {
        return 1;
    } else {
        return number * findFactorial(number - 1);
    }
}




/*
Задача 2 (*)

Описати знаходження послідовності чисел Фібоначчі:
F(n) = F(n-1) + F(n-2)

Іншими словами, наступне число є сумою двох попередніх.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987....

0
1
0+1=1 // 1 число Фібоначчі F(1) = 1 + 0 = 1
1+1=2 // 2 число Фібоначчі F(2) = 1 + 1 = 2
1+2=3 // 3 число Фібоначчі F(2) = 2 + 1 = 3
2+3=5 // 4 число Фібоначчі F(2) = 3 + 2 = 5
3+5=8 // 5 число Фібоначчі F(2) = 5 + 3 = 8

*/

function findFibonacchi (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return findFibonacchi(n - 1) + findFibonacchi(n - 2);
    
}