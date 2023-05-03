console.log(`Задача №1 Функция конвертации скоростей`)
let kmh = 36, ms = 20;
function convertSpeed(speed, convert) {
    if (convert == 'toMS') {
        return (speed / 3600 * 1000);
    }
    else if (convert == 'toKMH') {
        return (speed * 3600 / 1000)
    }
}
console.log(`convertSpeed(36, 'toMS') -> ${convertSpeed(kmh, 'toMS')} м/с`);
console.log(`convertSpeed(20, 'toKMH') -> ${convertSpeed(ms, 'toKMH')} км/ч`);


// console.log(`\nЗадача №2 Абсолютное значение`)
// let number = prompt("Введите число");
// function absValue(module) {
//     if(module < 0) {
//         module *= -1;
//     }
//     return(module);
// }
// console.log(`absValue(${number}) -> ${absValue(number)}`);


console.log(`\nЗадача №3 Работа с объектом`)
let student = {
    group: 201, 
    last_name: "Иванов",
    first_name: "Иван"
};
console.log(`Список свойств: ${Object.keys(student)}`);
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);


console.log(`\nЗадача №4 Случайные числа`)
function randomInteger(min, max) {
    let rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}
console.log(`randomNumber(-11, 11) -> ${randomInteger(-11, 11)}`);


console.log(`\nЗадача №5 Значения из массива`)
const Array = [1, 2, 3, 4, 5, 6, 7];
function getRandom(n, Array) {
    const indexes = new Set();
    while (indexes.size < n) {
        const index = Math.floor(Array.length * Math.random());
        indexes.add(index);
    }
    const result = [...indexes].map(index => Array[index]);
    return result;
}
console.log(getRandom(2, Array));
