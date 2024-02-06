// У нас є об'єкт юзера
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contacts: {
        email: 'john@gmail.com',
        phone: '+380994875717'
    }
}

//отримати значення name/city/email/ phone

const {name, address: {city}, contacts: {email, phone}} = user;
console.log(name);
console.log(city);
console.log(email);
console.log(phone);
