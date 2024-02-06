const monitor = {
    sizes: {
        height: {
            value: 30,
            scale: 'cm // 1'
        },
        width: {
            value: 50,
            scale: 'cm // 2'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Grc'
    },
    color: 'black',
    resolution: '4K'
}

// console.log(monitor.color);
// console.log(monitor.sizes.height.value); // прокладаємо шлях до value, але це НЕ ЗРУЧНО

// // const height = monitor.sizes.height.value; // можно зберегти значення в змінну, і використовувати по призначенню
// console.log(height);

// //Але для цього є ДЕСТРУКТКРИЗАЦІЯ (спеціальний синтаксис присвоєння, витягує властивості з об'єкту)

// const {resolution, color} = monitor; // якщо треба декілька властивостей, то можна перерах ії через кому
// console.log(resolution);
// console.log(color);

// const {resolution, color: monitorColor} = monitor; // якщо хочему змінити назву color і щоб в змінну записалось нове ім'я color: monitorColor


// Задача: Витягнути value для висоти та ширини монітору

// const {sizes: {height: {value: heightValue}, width: {value: widthValue} }, brightness, refresh: {value: refreshValue}} = monitor; // переназвали змінну на heightValue
// console.log(heightValue); // heightValue - це тепер змінна

// // const {sizes: {width: {value: widthValue}}} = monitor; 
// console.log(widthValue); //widthValue - це тепер змінна
// console.log(refreshValue);
// console.log(brightness);

// const {sizes: {height: {scale: scaleHeight}, width: {scale: scaleWidth} }} = monitor; 
// console.log(scaleHeight);
// console.log(scaleWidth);


const {color, brightness, resolution, ...restOfMonitor} = monitor;
//...restOfMonitor - все інше записалось у рест об'єкт
