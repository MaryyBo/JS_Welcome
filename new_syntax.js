

/*
Написати клас Worker.
У працівника є ім'я, прізвище, ставка за робочий день і кількість відпрацьованих днів у цьому місяці
Метод, який повертає зарплатню цього робітника за поточний місяць

*/
class Worker {
    constructor (name, lastName, daySalaryRate, workedDays) {
        this.name = name;
        this.lastName = lastName;
        this.daySalaryRate = daySalaryRate;
        this.workedDays = workedDays;
    }
    getMonthSalary () {
        return this.daySalaryRate * this.workedDays;
}
}


const worker1 = new Worker("Alex", "Dane", 150, 20);
const worker2 = new Worker('Dari', 'Dane', 130, 23);

// console.log(`${this.name} ${this.lastName} отримав зарплатню ${this.getMonthSalary()} за поточний місяць.`);
